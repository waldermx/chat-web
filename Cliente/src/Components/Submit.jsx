import React from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import BottomBarIcons from './BottomBarIcons'

const Submit = () => {
    return (
        <button type="submit" style={{backgroundColor: 'transparent', padding: 0, border: 'none'}}>
            <BottomBarIcons icon={faPaperPlane}/>
        </button>
    )
}

export default Submit