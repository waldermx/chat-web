import React from 'react'
import Message from './Message'
import FlexDirectionColumn from './Containers/FlexDirectionColumn'

const MessagesMapped = ({ messages }) => {
    return (
        <FlexDirectionColumn style={{width: '100%'}}>
            {messages.map((messageContent) => {
                return <Message text={messageContent['message']} key={messageContent['message']} id={messageContent['userID']} /> //Cambiar por id
            })}
        </FlexDirectionColumn>

    )
}

export default MessagesMapped