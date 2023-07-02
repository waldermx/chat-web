import React, { useState } from 'react'
import Emojis from './Emojis'
import InputField from './InputField'
import Submit from './Submit'
import TypingContainer from './Containers/TypingContainer'



const TypingBar = () => {

  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(text)
    setText("")
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <TypingContainer onSubmit={handleSubmit}>
      <Emojis />
      <InputField onChange={handleChange} value={text}/>
      <Submit />
    </TypingContainer>
  )
}

export default TypingBar

