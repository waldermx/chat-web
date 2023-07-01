import React from 'react'
import UserInfo from './UserInfo'
import MenuButton from './MenuButton'
import FlexDirectionRow from './FlexDivs/FlexDirectionRow'
import usrImg from '../assets/profilePicDefault.webp'

//Cambiar username e img por contexto

const TopBar = ({userName}) => {
    return (
        <FlexDirectionRow style={{
            width: ' 100%',
            height: '80px',
            backgroundColor: 'var(--primary-color)',
            borderLeft: 0,
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <MenuButton />
            <UserInfo srcImg={usrImg} userName={userName??"Nombre de Usuario"}/>
        </FlexDirectionRow >
    )
}

export default TopBar