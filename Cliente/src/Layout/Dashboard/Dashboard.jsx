import React from 'react'
import { faPenToSquare, faComments, faUsers } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../Components/IconButtton'
import FlexDirectionColumn from '../../Components/Containers/FlexDirectionColumn'


const Dashboard = () => {
    return (
        <FlexDirectionColumn style={{
            width: '45px',
            height: '100%',
            alignItems: 'center',
            backgroundColor: 'var(--primary-color)',
            justifyContent: 'space-around',
            paddingBottom: '100px',
            position: "fixed"
        }
        }>
            <IconButton fontAwesomeIcon={faComments} />
            <IconButton fontAwesomeIcon={faPenToSquare} />
            <IconButton fontAwesomeIcon={faUsers} />
        </FlexDirectionColumn >
    )
}

export default Dashboard