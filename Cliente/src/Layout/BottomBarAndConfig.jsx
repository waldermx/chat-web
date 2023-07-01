import React from 'react'
import TypingBar from '../Components/BottomBar'
import IconButton from '../Components/IconButtton'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import FlexDirectionRow from '../Components/FlexDivs/FlexDirectionRow'

const BottomBar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className='MenuContainer'>
        <div className='ToggleButton'>
          <IconButton fontAwesomeIcon={faGear} />
        </div>
      </div>
      <FlexDirectionRow style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '50px',
        width: '100%',
        backgroundColor: 'var(--light-primary-color)',
        color: '#2d1f7b'
      }}>
        <TypingBar />
      </FlexDirectionRow>
    </div>
  )
}

export default BottomBar