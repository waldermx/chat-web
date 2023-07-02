import React from 'react'
import Message from './Message'

const MessagesMapped = ({ messages }) => {
    return (
        messages.map((messageContent) => {
            return <Message text={messageContent} />
        })
    )
}

export default MessagesMapped