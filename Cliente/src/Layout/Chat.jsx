import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import DisplayChatField from './DisplayChatField'

const Chat = () => {
    return (
        <div className='ChatContainer'>
            <Dashboard />
            <DisplayChatField/>
        </div>
    )
}

export default Chat