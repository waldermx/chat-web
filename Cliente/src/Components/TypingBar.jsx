import React from 'react'
import Emojis from './Emojis'
import InputField from './InputField'
import FlexDirectionRow from './Containers/FlexDirectionRow'

const TypingBar = () => {
  return (
    <FlexDirectionRow style={{
      alignItems: 'center',
      justifyContent: 'center',
      height: '50px',
      width: '100%',
      backgroundColor: 'var(--light-primary-color)',
      color: '#2d1f7b'
    }}>
      <FlexDirectionRow style={{
        display: 'flex',
        height: '60%',
        width: '80%',
        alignItems: 'center'
      }}>
        <Emojis />
        <InputField />
      </FlexDirectionRow>
    </FlexDirectionRow>
  )
}

export default TypingBar