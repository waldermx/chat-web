import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlexDirectionRow from './Containers/FlexDirectionRow'

const IconButton = ({ fontAwesomeIcon, ...resto }) => {
    return (
        <FlexDirectionRow className="DashboardIcon" style={{
            width: '43px',
            height: '43px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: 'var(--primary-color)',
            transition: 'background-color 0.3s'
        }}>
            <FontAwesomeIcon icon={fontAwesomeIcon} size="2xl" className='Icon' {...resto} />
        </FlexDirectionRow >
    )
}

export default IconButton