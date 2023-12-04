import React, { useEffect, useState } from 'react'
import "../chat/Chat.css"
import { AiOutlineSend } from "react-icons/ai";
import Message from '../message/Message';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import { node } from 'prop-types';
const name = "Bình"

const Chat = () => {
    const [messages, setMessages] = useState([])
    const { user } = useSelector(state => state.user)
    const { userChat, chatId } = useSelector(state => state.chat)
    const [text, setText] = useState("")
    const [img, setImg] = useState(null)

    const handleSend = () => {
        if (img) {

        } else {

        }
    }

    useEffect(() => {
        if (chatId) {
            const unsub = onSnapshot(doc(db, "chats", chatId), (doc) => {
                // doc.exists() && setMessages(doc.data())
                console.log(doc.data());
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
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
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
                        placeholder={name ? `Gửi tin nhắn đến ${userChat ? userChat?.lastname : null}` : `Gửi tin nhắn đến ??`}
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