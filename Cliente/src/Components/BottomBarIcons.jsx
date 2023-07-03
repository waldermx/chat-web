import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlexDirectionRow from './Containers/FlexDirectionRow'

const BottomBarIcons = ({icon}) => {
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
            <FontAwesomeIcon icon={icon} size="2xl" className='Icon' id="Emoji"
                style={{
                    color: '#2d1f7b',
                    height: '21px',
                    width: '21px'
                }} />
        </FlexDirectionRow>
    )
}

export default BottomBarIcons