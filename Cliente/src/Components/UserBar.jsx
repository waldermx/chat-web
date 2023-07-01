import React from 'react'
import FlexDirectionRow from './FlexDivs/FlexDirectionRow'
import UserInfo from './UserInfo'

const UserBar = () => {
  return (
    <FlexDirectionRow style={{
        justifyContent: 'space-evenly',
        width: '100%'
    }}>
        <UserInfo/>
    </FlexDirectionRow >
  )
}

export default UserBar