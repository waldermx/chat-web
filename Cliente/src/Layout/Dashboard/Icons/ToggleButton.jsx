import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const ToggleButton = ({...rest}) => {
    return (
        <div className='DashboardIcon'>
            <FontAwesomeIcon icon={faBars} size='2xl' className='Icon' {...rest}/> 
       </div>
    )
}

export default ToggleButton
