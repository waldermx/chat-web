import React from 'react'
import IconButton from '../../../Components/IconButtton'
import FlexDirectionRow from '../../../Components/Containers/FlexDirectionRow'

const FaButtonsIcon = ({icon}) => {
    return (
        <FlexDirectionRow style={{
            display: 'flex',
            width: '45px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <IconButton fontAwesomeIcon={icon} />
        </FlexDirectionRow>
    )
}

export default FaButtonsIcon
