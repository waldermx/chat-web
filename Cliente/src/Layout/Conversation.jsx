import React from 'react'
import FlexDirectionColumn from '../Components/Containers/FlexDirectionColumn'
import MessagesMapped from '../Components/MessagesMapped';
import io from 'socket.io-client'
import { PORT } from '../../../Server/config.js'



const socket = io(`ws://localhost:${PORT}`)


const conversation = [

];



const Conversation = () => {
  return (
    <FlexDirectionColumn style={{ width: '100%', marginBottom:'50px' }}>
      <MessagesMapped messages={conversation} />
    </FlexDirectionColumn>
  )
}

export default Conversation