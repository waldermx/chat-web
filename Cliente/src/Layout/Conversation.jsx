import React from 'react'
import FlexDirectionColumn from '../Components/Containers/FlexDirectionColumn'
import MessagesMapped from '../Components/MessagesMapped';
import io from 'socket.io-client'
import { PORT } from '../../../Server/config.js'
import { useContext, useEffect } from 'react';
import { ConversationContext } from '../Context/ConversationContext';



export const socket = io(`ws://localhost:${PORT}`)


const Conversation = () => {
  const { conversation, addMessage } = useContext(ConversationContext)

  useEffect(() => {
    console.log('mensaje')
    // Configurar el listener para el evento 'message'
    socket.on('message', (message) => {
      // Agregar el nuevo mensaje al estado
      addMessage(message)
    });


  }, [socket]);

  return (
    <FlexDirectionColumn style={{ width: '100%', marginBottom: '50px' }}>
      <MessagesMapped messages={conversation} />
    </FlexDirectionColumn>
  )
}

export default Conversation