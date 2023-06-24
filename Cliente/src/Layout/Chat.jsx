import React from 'react'
import MessagesSection from '../Components/MessagesSection'
import ChatInfoBar from '../Components/ChatInfoBar'

const Chat = () => {
    return (
        <div className='Main'>
            <ChatInfoBar />
            <MessagesSection />
        </div>
    )
}

export default Chat