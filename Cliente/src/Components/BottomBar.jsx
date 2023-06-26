import React from 'react'
import Emojis from './Emojis'
import InputField from './InputField'

const BottomBar = () => {
  return (
    <div className='TypingContainer'>
      <Emojis />
      <InputField />
    </div>
  )
}

export default BottomBar