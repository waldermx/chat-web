import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const NewMessageButton = () => {
    return (
        <div className='DashboardIcon'>
            <FontAwesomeIcon icon={faPenToSquare} size="2xl" className='Icon' />
        </div>
    )
}

export default NewMessageButton