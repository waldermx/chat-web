import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = ({fontAwesomeIcon}) => {
    return (
        <div className='DashboardIcon'>
            <FontAwesomeIcon icon={fontAwesomeIcon} size="2xl" className='Icon' />
        </div>
    )
}

export default IconButton