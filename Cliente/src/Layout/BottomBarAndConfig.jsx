import React from 'react'
import TypingBar from '../Components/TypingBar'
import IconButton from '../Components/IconButtton'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import FlexDirectionRow from '../Components/Containers/FlexDirectionRow'
import FaButton from '../Components/FaButton'

const BottomBar = () => {
  return (
    <FlexDirectionRow style={{ alignItems: 'center' }}>
      <FlexDirectionRow style={{
        height: '100%',
        width: '45px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <FaButton icon={faGear} />
      </FlexDirectionRow>

      <TypingBar />
    </FlexDirectionRow>
  )
}

export default BottomBar