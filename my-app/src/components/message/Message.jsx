import React from "react"
import "../message/Message.css"
import { useSelector } from "react-redux"

const Message = ({message}) => { 
    const { userChat } = useSelector(state => state.chat)
    console.log(message ? message: null);
    return (
        <div className="message">
            <div className="messageInfo">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
            </div>
        </div>
    )
} 

export default Message