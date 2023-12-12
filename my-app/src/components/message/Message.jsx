import React from "react"
import "../message/Message.css"
import { useSelector } from "react-redux"

const Message = ({ message }) => {
    const { userChat } = useSelector(state => state.chat)
    return (
        <div className="message">
            <div className="messageInfo">
                <img src={userChat ? userChat?.avtuser : null} alt="" />
            </div>
            <div className="messageContent">
                <p className="messageContent-text">{message ? message?.text : null}</p>
                {
                    message?.img
                        ? <img className="messageContent-img" src={message ? message?.img : null} alt="" />
                        : null
                }
            </div>
        </div>
    )
}

export default Message