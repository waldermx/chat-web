import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from '@fortawesome/free-solid-svg-icons'
import FlexDirectionRow from './Containers/FlexDirectionRow'

const Emojis = () => {
    return (
        <FlexDirectionRow className="Emojis" style={{
            width: '43px',
            height: '43px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: 'var(--light-primary-color)',
            transition: 'background-color 0.3s'
        }}>
            <FontAwesomeIcon icon={faIcons} size="2xl" className='Icon' id="Emoji"
                style={{
                    color: '#2d1f7b',
                    height: '21px',
                    width: '21px'
                }} />
        </FlexDirectionRow>
    )
}

export default Emojis