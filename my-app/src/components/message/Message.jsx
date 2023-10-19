import React from "react"
import "../message/Message.css"

const Message = () => { 
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