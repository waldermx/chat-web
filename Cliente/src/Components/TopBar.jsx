import React from 'react'
import UserInfo from './UserInfo'
import FaButton from './FaButton'
import FlexDirectionRow from './Containers/FlexDirectionRow'
import usrImg from '../assets/profilePicDefault.webp'
import { faBars } from '@fortawesome/free-solid-svg-icons'

//Cambiar username e img por contexto

const TopBar = ({ userName }) => {
    return (
        <FlexDirectionRow style={{
            width: ' 100%',
            height: '80px',
            backgroundColor: 'var(--primary-color)',
            borderLeft: 0,
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <FaButton icon={faBars} />
            <UserInfo srcImg={usrImg} userName={userName ?? "Nombre de Usuario"} />
        </FlexDirectionRow >
    )
}

export default TopBar