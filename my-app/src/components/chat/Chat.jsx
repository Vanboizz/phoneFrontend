import React, { useEffect, useState } from 'react'
import "../chat/Chat.css"
import { AiOutlineSend } from "react-icons/ai";
import Message from '../message/Message';
import { Timestamp, arrayUnion, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { useSelector } from 'react-redux';
import { node } from 'prop-types';
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Chat = () => {
    const [messages, setMessages] = useState([])
    const { user } = useSelector(state => state.user)
    const { userChat, chatId } = useSelector(state => state.chat)
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)

    const handleKey = (e) => {
        (e.code === "Enter" || e.code === "NumpadEnter") && (handleSend())
    }

    const handleSend = async () => {
        if (user) {
            if (img) {
                console.log('img');
                const storageRef = ref(storage, uuid());
                const uploadTask = uploadBytesResumable(storageRef, img);

                uploadTask.on(
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        console.log('abc');
                        getDownloadURL(uploadTask.snapshot.ref)
                            .then(async (downloadURL) => {
                                await updateDoc(doc(db, 'chats', chatId), {
                                    messages: arrayUnion({
                                        id: uuid(),
                                        text,
                                        senderId: user[0]?.idusers,
                                        date: Timestamp.now(),
                                        img: downloadURL,
                                    })
                                })
                            })
                            .catch((error) => {
                                console.log(error);
                            })

                    }
                );
            } else {
                await updateDoc(doc(db, "chats", chatId), {
                    messages: arrayUnion({
                        id: uuid(),
                        text,
                        senderId: user[0]?.idusers,
                        date: Timestamp.now(),
                    })
                })
            }

            await updateDoc(doc(db, "adminChats", user[0]?.idusers.toString()), {
                [chatId + ".lastMessage"]: {
                    text,
                },
                [chatId + ".date"]: serverTimestamp(),
            });

            // await updateDoc(doc, (db, "userChats", userChat?.idusers), {
            //     [chatId + ".lastMessage"]: {
            //         text
            //     },
            //     [chatId + ".date"]: serverTimestamp(),
            // })
            setText('')
            setImg(null)
        }

    }
    useEffect(() => {
        if (chatId) {
            const unsub = onSnapshot(doc(db, "chats", chatId), (doc) => {
                doc.exists() && setMessages(doc.data()?.messages)
            });
            return () => {
                unsub()
            }
        }
    }, [chatId])
    // console.log(messages ? messages : null);
    return (
        <div className='chat'>

            <div className='chat__with'>
                <img src={userChat ? userChat?.avtuser : null} alt="" />
                <div className="chat__with-right">
                    <p style={{ fontWeight: 600, fontSize: 18 }}>{`Chat với ${userChat ? userChat?.lastname : null}`}</p>
                </div>
            </div>

            <div className="chat__boxchat">

                <div className="list-message">
                    {
                        messages
                            ? messages?.map((m, index) => (
                                <Message message={m} key={index} />
                            ))
                            : null
                    }
                </div>

                <div className="input-message">
                    <input
                        onChange={e => setText(e.target.value)}
                        type="text"
                        value={text}
                        placeholder={userChat ? `Gửi tin nhắn đến ${userChat ? userChat?.lastname : null}` : `Gửi tin nhắn đến ..`}
                        onKeyDown={handleKey}
                    />


                    <input
                        className='input-img'
                        type="file" id='file'
                        style={{ display: "none" }}
                        onChange={e => setImg(e.target.files[0])} />

                    <label className='input-message__img' style={{ width: "20px", height: "20px" }} htmlFor="file">
                        <img style={{ width: "20px", height: "20px" }} src="/uploadimage.png" alt="" />
                    </label>

                    <AiOutlineSend onClick={() => handleSend()} className='icon__send' />

                </div>

            </div>
        </div>
    )
}

export default Chat