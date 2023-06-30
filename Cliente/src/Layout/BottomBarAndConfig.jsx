import React from 'react'
import TypingBar from '../Components/BottomBar'
import IconButton from '../Components/IconButtton'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const BottomBar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className='MenuContainer'>
        <div className='ToggleButton'>
          <IconButton fontAwesomeIcon={faGear} />
        </div>
      </div>
      <div className='BottomBar'>
        <TypingBar />
      </div>
    </div>
  )
}

export default BottomBar