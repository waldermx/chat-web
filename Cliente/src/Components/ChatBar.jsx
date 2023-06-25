import React from 'react'
import Pic from '../assets/profilePicDefault.webp'
import ToggleButton from '../Layout/Dashboard/Icons/ToggleButton'

const ChatBar = () => {
    return (
        <div className='ChatBar'>
            <div className='MenuContainer'>
                <div className='ToggleButton'>
                    <ToggleButton id="ToggleButton" />
                </div>
            </div>
            <div className='UserName'>
                <img src={Pic} className="userImage" alt="Profile picture" />
                <h2 className='text'>Nombre del usuario</h2>
            </div>
        </div>
    )
}

export default ChatBar