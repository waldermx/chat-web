import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGear} from '@fortawesome/free-solid-svg-icons'

const OptionsButton = () => {
    return (
        <div className='DashboardIcon'>
            <FontAwesomeIcon icon={faGear} size='2xl'className='Icon'/> 
       </div>
    )
}

export default OptionsButton
