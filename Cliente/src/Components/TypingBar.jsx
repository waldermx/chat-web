import React, { useContext, useEffect, useState } from 'react'
import BottomBarIcons from './BottomBarIcons'
import InputField from './InputField'
import Submit from './Submit'
import TypingContainer from './Containers/TypingContainer'
import { ConversationContext } from '../Context/ConversationContext'
import { faIcons } from '@fortawesome/free-solid-svg-icons'



const TypingBar = () => {
  
  const [text, setText] = useState("")

  const {socket, clientID} = useContext(ConversationContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = {
      userID: clientID,
      message: text
    }

    setText("")
    socket.emit('message',message)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <TypingContainer onSubmit={handleSubmit}>
      <BottomBarIcons icon={faIcons} />
      <InputField onChange={handleChange} value={text} />
      <Submit />
    </TypingContainer>
  )
}

export default TypingBar

