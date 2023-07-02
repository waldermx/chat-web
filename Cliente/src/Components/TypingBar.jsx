import React, { useContext, useEffect, useState } from 'react'
import Emojis from './Emojis'
import InputField from './InputField'
import Submit from './Submit'
import TypingContainer from './Containers/TypingContainer'
import { messageContext } from '../Context/MessageContext'
import { ConversationContext } from '../Context/ConversationContext'



const TypingBar = () => {

  // const { message, setMessage } = useContext(messageContext)
  const { addMessage } = useContext(ConversationContext)

  const [text, setText] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({
      userID: 0,
      message: text
    })
    setText("")
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

