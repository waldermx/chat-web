import React from 'react'

const UserImage = ({Picture}) => {
  return (
    <img src={Picture} className="userImage" alt="Profile picture" />
  )
}

export default UserImage