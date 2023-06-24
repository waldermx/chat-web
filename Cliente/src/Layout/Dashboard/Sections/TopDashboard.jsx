import React from 'react'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../../Components/IconButtton'

const TopDashboard = () => {
    return (
        <div className='UpperDashboard'>
            <IconButton fontAwesomeIcon={faBars}/>
        </div>
    )
}

export default TopDashboard