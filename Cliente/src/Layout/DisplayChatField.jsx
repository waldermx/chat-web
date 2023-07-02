import React from 'react'
import Conversation from './Conversation'
import FlexDirectionRow from '../Components/Containers/FlexDirectionRow'



const DisplayChatField = () => {
  return (
    <FlexDirectionRow style={{ width: '93.2%', padding: 10, position: 'absolute', left: '45px', top: '80px', zIndex: -1}}>
      <Conversation />
    </FlexDirectionRow>
  )
}

export default DisplayChatField