import React from 'react'
import MessageGlobo from './MessageGlobo'
import FlexDirectionRow from './Containers/FlexDirectionRow'

const Message = ({ text, id }) => {

    const isMyMessage = (id === 0)

    console.log(id)

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