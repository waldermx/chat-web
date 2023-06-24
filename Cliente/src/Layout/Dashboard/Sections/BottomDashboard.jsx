import React from 'react'
import OptionsButton from '../Icons/OptionsButton'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../../Components/IconButtton'


const BottomDashboard = () => {
    return (
        <div className='LowerDashboard'>
            <IconButton fontAwesomeIcon={faGear}/>
        </div>
    )
}

export default BottomDashboard