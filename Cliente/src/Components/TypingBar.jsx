import React from 'react'
import IconButton from './IconButtton'
import { faFaceFlushed } from '@fortawesome/free-solid-svg-icons'

const TypingBar = () => {
  return (
    <div className='TypingContainer'>
        <IconButton fontAwesomeIcon={faFaceFlushed} id="Emoji"/>
        <input type="text" />
    </div>
  )
}

export default TypingBar