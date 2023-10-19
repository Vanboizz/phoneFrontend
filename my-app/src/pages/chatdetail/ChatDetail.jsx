import React from 'react'
import "../chatdetail/ChatDetail.css"
import Chat from '../../components/chat/Chat'
import SideBar from '../../components/sidebar/SideBar'

const ChatDetail = () => {
    return (
        <div className='chatdetail'>
            <SideBar/>
            <Chat />
        </div>
    )
}

export default ChatDetail