import React from 'react'
import MessagesSection from '../Components/MessagesSection'
import Dashboard from './Dashboard/Dashboard'
import TypingBar from '../Components/TypingBar'

const Chat = () => {
    return (
        <div className='ChatContainer'>
            <Dashboard />
            <MessagesSection />
        </div>
    )
}

export default Chat