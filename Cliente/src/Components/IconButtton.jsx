import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = ({fontAwesomeIcon, ...resto}) => {
    return (
        <div className='DashboardIcon'>
            <FontAwesomeIcon icon={fontAwesomeIcon} size="2xl" className='Icon' {...resto} />
        </div>
    )
}

export default IconButton