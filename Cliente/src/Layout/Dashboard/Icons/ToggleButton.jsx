import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const ToggleButton = () => {
    return (
        <div className='DashboardIcon'>
            <FontAwesomeIcon icon={faBars} size='2xl' className='Icon'/> 
       </div>
    )
}

export default ToggleButton
