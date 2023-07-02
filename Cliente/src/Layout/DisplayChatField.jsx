import React from 'react'
import Conversation from './Conversation'
import FlexDirectionRow from '../Components/Containers/FlexDirectionRow'

const DisplayChatField = () => {
  return (
    <FlexDirectionRow style={{flexGrow: 2, padding:10}}>
        <Conversation/>
    </FlexDirectionRow>
  )
}

export default DisplayChatField