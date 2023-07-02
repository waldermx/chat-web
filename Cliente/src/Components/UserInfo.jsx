import React from 'react'
import FlexDirectionRow from './Containers/FlexDirectionRow'
import UserImage from './UserImage'
import RobotoText from './RobotoText'

const UserInfo = ({srcImg, userName}) => {
    return (
        <FlexDirectionRow style={{justifyContent: 'center', width: '100%'}}>
            <FlexDirectionRow style={{
                alignItems: 'center',
                height: '100%',
                width: '300px',
                justifyContent: 'space-around'
            }}>
                <UserImage Picture={srcImg} />
                <RobotoText>{userName}</RobotoText>
            </FlexDirectionRow>
        </FlexDirectionRow>
    )
}

export default UserInfo