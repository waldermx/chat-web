import React from 'react'
import ToggleButton from '../Layout/Dashboard/Icons/ToggleButton'
import UserImage from './UserImage'
import usrImg from '../assets/profilePicDefault.webp'
import RobotoText from './RobotoText'
import MenuButton from './MenuButton'


const ChatBar = () => {
    return (
        <div className='ChatBar'>
            <MenuButton/>
            <div className='InfoBar'>
                <div className='UserName'>
                    <UserImage Picture={usrImg}/>
                    <RobotoText>Nombre del usuario</RobotoText>
                </div>
            </div>
        </div>
    )
}

export default ChatBar