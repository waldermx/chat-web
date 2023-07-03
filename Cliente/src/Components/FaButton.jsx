import React from 'react'
import FlexDirectionRow from './Containers/FlexDirectionRow';
import FaButtonsIcon from '../Layout/Dashboard/Icons/FaButtonsIcon';

// const handleClick = () => {
//     console.log("You Clicked the Menu");
// }

const FaButton = ({ icon }) => {
    return (
        <FlexDirectionRow style={{
            display: 'flex',
            height: '100%',
            width: '45px',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <FaButtonsIcon icon={icon} />
        </FlexDirectionRow >
    )
}

export default FaButton

export const FaSubmit = ({icon}) => {
    return (
        <button type='submit' style={{
            display: 'flex',
            height: '100%',
            width: '45px',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <FaButtonsIcon icon={icon} />
        </button >
    )
}

