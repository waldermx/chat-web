import React from 'react'
import MessageGlobo from './MessageGlobo'
import FlexDirectionRow from './Containers/FlexDirectionRow'

const Message = ({ text }) => {
    return (
        <FlexDirectionRow>
            <MessageGlobo>
                {text}
            </MessageGlobo>
        </FlexDirectionRow>
    )
}

export default Message