import React from 'react'
import { faUsers, faComments,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../../Components/IconButtton'


const MidDashboard = () => {
    return (
        <div className='MiddleDashboard'>
            <IconButton fontAwesomeIcon={faComments} />
            <IconButton fontAwesomeIcon={faPenToSquare}/>
            <IconButton fontAwesomeIcon={faUsers} />
        </div>
    )
}

export default MidDashboard
