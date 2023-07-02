import React from 'react'
import FlexDirectionColumn from '../Components/Containers/FlexDirectionColumn'
import MessagesMapped from '../Components/MessagesMapped';
import io from 'socket.io-client'
import { PORT } from '../../../Server/config.js'
import { useContext } from 'react';
import { ConversationContext } from '../Context/ConversationContext';



const socket = io(`ws://localhost:${PORT}`)


const Conversation = () => {
const {conversation} = useContext(ConversationContext)

  return (
    <FlexDirectionColumn style={{ width: '100%', marginBottom:'50px' }}>
      <MessagesMapped messages={conversation} />
    </FlexDirectionColumn>
  )
}

export default Conversation