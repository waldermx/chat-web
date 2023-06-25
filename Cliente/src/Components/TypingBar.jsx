import React from 'react'
import IconButton from './IconButtton'
import { faIcons } from '@fortawesome/free-solid-svg-icons'

const TypingBar = () => {
  return (
    <div className='TypingContainer'>
        <IconButton fontAwesomeIcon={faIcons} id="Emoji"/>
        <input type="text" />
    </div>
  )
}

export default TypingBar