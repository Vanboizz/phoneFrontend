import React from 'react'
import "../chat/Chat.css"
import { AiOutlineSend } from "react-icons/ai";
import Message from '../message/Message';

const name = "Bình"
const quantity = 2

const Chat = () => {
    return (
        <div className='chat'>

            <div className='chat__with'>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <div className="chat__with-right">
                    <p style={{ fontWeight: 600 }}>{`Chat with ${name}`}</p>
                    <span>{`${quantity} members, ${quantity} online`}</span>
                </div>
            </div>

            <div className="chat__boxchat">

                <div className="list-message">
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>

                <div className="input-message">
                    <input
                        type="text"
                        placeholder={name ? `Gửi tin nhắn đến ${name}` : `Gửi tin nhắn đến ??`}
                    />
                        <AiOutlineSend className='icon__send' />

                </div>


            </div>
        </div>
    )
}

export default Chat