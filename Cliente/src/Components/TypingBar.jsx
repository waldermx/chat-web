import React, { useContext, useEffect, useState } from 'react'
import Emojis from './Emojis'
import InputField from './InputField'
import Submit from './Submit'
import TypingContainer from './Containers/TypingContainer'
import { ConversationContext } from '../Context/ConversationContext'
import { socket } from '../Layout/Conversation'


const TypingBar = () => {
  
  const [text, setText] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    const message = {
      userID: 0,
      message: text
    }
    // addMessage(message)
    setText("")
    socket.emit('message',message)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <TypingContainer onSubmit={handleSubmit}>
      <Emojis />
      <InputField onChange={handleChange} value={text} />
      <Submit />
    </TypingContainer>
  )
}

export default TypingBar

