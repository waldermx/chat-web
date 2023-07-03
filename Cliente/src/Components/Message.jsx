import React, { useContext } from 'react'
import MessageGlobo from './MessageGlobo'
import FlexDirectionRow from './Containers/FlexDirectionRow'
import { ConversationContext } from '../Context/ConversationContext'

const Message = ({ text, id }) => {

    const {clientID} = useContext(ConversationContext)

    const isMyMessage = (id === clientID)


    if (!isMyMessage) {
        return (
            <FlexDirectionRow style={{ marginTop: 3, width: '90%' }}>
                <MessageGlobo>
                    {text}
                </MessageGlobo>
            </FlexDirectionRow>
        )
    }
    if (isMyMessage){
        return (
            <FlexDirectionRow style={{ marginTop: 3, width: '90%', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                <MessageGlobo isMyMessage>
                    {text}
                </MessageGlobo>
            </FlexDirectionRow>
        )
    }
}

export default Message