import React from 'react'
import Pic from '../assets/profilePicDefault.webp'

const ChatInfoBar = () => {
    return (
        <div className='ChatBar'>
            <div className='UserName'>
                <img src={Pic} className="userImage" alt="Profile picture" />
                <h2 className='text'>Nombre del usuario</h2>
            </div>
        </div>
    )
}

export default ChatInfoBar