import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'


const ChatsButton = () => {
    return (
        <div className='DashboardIcon'>
            <FontAwesomeIcon icon={faComments} size='2xl' className='Icon'/>
        </div>
    )
}

export default ChatsButton