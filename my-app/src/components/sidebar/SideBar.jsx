import React, { useEffect, useState } from 'react'
import "../sidebar/SideBar.css"
import { collection, query, where, getDoc, getDocs, doc, setDoc, updateDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUsers } from '../feature/user/userSlice';
import { element } from 'prop-types';
import { changeUserChat } from '../feature/chat/chatSlice';


const SideBar = () => {

    const { user, listUser } = useSelector((state) => state.user)
    const { chatId } = useSelector(state => state.chat)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [chats, setChats] = useState([])

    const accessToken = localStorage.getItem('accessToken')

    const searchUsers = (e) => {
        setUserName(e?.target?.value)
    }

    const handleSearch = async () => {
        const q = query(collection(db, "adminChats"), where("displayName", "==", "Nguyen Admin"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }

    const handleKey = (e) => {
        (e.code === "Enter" || e.code === "NumpadEnter") && handleSearch()
    }

    // Giải thích: admiChats là toàn bộ những cái user đã chat với thằng đó
    // chats: sẽ tập hợp nhiều đoạn chat của từng cặp.

    const handleSelect = async (userChoose) => {

        // Check whether the group (chats in firestore) exist or not, if not create
        if (user && userChoose) {
            const combinedId =
                user[0]?.idusers > userChoose?.idusers
                    ? user[0]?.idusers.toString() + userChoose?.idusers.toString()
                    : userChoose?.idusers.toString() + user[0]?.idusers.toString()

            dispatch(changeUserChat({ combinedId, userChat: userChoose }))
            try {
                const res = await getDoc(doc(db, "chats", combinedId))

                if (!res.exists()) {
                    // create a chat in chats collection
                    await setDoc(doc(db, 'chats', combinedId), { messages: [] })

                    // create user chats
                    await updateDoc(doc(db, 'adminChats', user[0]?.idusers.toString()), {
                        [combinedId + ".userInfo"]: {
                            idusers: userChoose?.idusers.toString(),
                            displayName: userChoose?.lastname,
                            photoURL: userChoose?.avtuser
                        },
                        [combinedId + ".date"]: serverTimestamp(),
                    })

                    // await updateDoc(doc(db, 'adminChats', userChoose?.idusers.toString()), {
                    //     [combinedId + ".userInfo"]: {
                    //         idusers: user[0]?.idusers.toString(),
                    //         displayName: user[0]?.firstname + ' ' + user[0]?.lastname,
                    //         photoURL: user[0]?.avtuser
                    //     },
                    //     [combinedId + ".date"]: serverTimestamp(),
                    // })
                }
                else { // hiển thị đoạn chat

                }
            } catch (error) {
                console.log(error);
            }
        }

        // create user chats
    }

    useEffect(() => {
        if (user) {
            const getChats = () => {
                const unsub = onSnapshot(doc(db, "adminChats", user[0]?.idusers.toString()), (doc) => {
                    setChats(doc.data())
                });

                return () => {
                    unsub();
                }
            }
            user[0]?.idusers && getChats()
        }
    }, [user ? user[0]?.idusers : null])
    useEffect(() => {
        if (accessToken) {
            dispatch(getUser(accessToken))
            dispatch(getUsers(accessToken))
        }
    }, [])

    useEffect(() => {
        if (listUser) {
            handleSelect(listUser?.find(user => user?.role === 'user'))
        }
    }, [listUser])

    return (
        <div className='sidebar'>
            {/* <div className='sidebar__info'>
                <p >ChatBox</p>
                <div className="sidebar__info-user">
                    <img src={user ? user[0]?.avtuser : ''} alt="" />
                    <p>{user ? user[0]?.lastname : ''}</p>
                </div>
            </div> */}

            <div className='sidebar__search'>
                <input className='search-name' type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={(e) => searchUsers(e)} />
            </div>

            <div className='list__chat'>
                {
                    listUser.filter(item => userName === "" ? item.role === "user" : (item.role === "user" && item.lastname === userName)).map((itemUser, index) => {
                        const combinedId =
                            user[0]?.idusers > itemUser?.idusers
                                ? user[0]?.idusers.toString() + itemUser?.idusers.toString()
                                : itemUser?.idusers.toString() + user[0]?.idusers.toString()
                        const chat = Object.entries(chats)?.find(chat => chat[0] === combinedId)
                        return (
                            <div
                                key={index}
                                className={combinedId === chatId ? "item__chat item__chat-active" : "item__chat"}
                                onClick={() => handleSelect(itemUser)}
                            >
                                <img src={itemUser ? itemUser?.avtuser : null} alt="" />

                                <div className="info__friend">
                                    <p
                                        style={{ fontWeight: 600 }}
                                        className='name-friend'>
                                        {itemUser?.lastname}
                                    </p>

                                    <p
                                        style={{ fontSize: 14 }}
                                        className='last-message'>
                                        {chat ? chat[1]?.lastMessage?.text : null}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBar