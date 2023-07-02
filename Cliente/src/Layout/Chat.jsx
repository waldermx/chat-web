import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import DisplayChatField from './DisplayChatField'
import FlexDirectionRow from '../Components/Containers/FlexDirectionRow'

const Chat = () => {
    return (
        <FlexDirectionRow style={{
            width: '100%',
            height: '100%',
        }}>
            <Dashboard />
            <DisplayChatField />
        </FlexDirectionRow>

    )
}

export default Chat