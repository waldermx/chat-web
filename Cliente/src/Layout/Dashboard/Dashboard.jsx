import React from 'react'
import ContainerDashboard from './ContainerDashboard'
import { faPenToSquare, faComments, faUsers } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../Components/IconButtton'


const Dashboard = () => {
    return (
        <ContainerDashboard>
            <IconButton fontAwesomeIcon={faComments} />
            <IconButton fontAwesomeIcon={faPenToSquare}/>
            <IconButton fontAwesomeIcon={faUsers} />
        </ContainerDashboard>
    )
}

export default Dashboard