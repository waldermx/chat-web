import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from '@fortawesome/free-solid-svg-icons'

const Emojis = () => {
    return (
        <div className='EmojiDiv'>
            <FontAwesomeIcon icon={faIcons} size="2xl" className='Icon' id="Emoji" />
        </div>
    )
}

export default Emojis