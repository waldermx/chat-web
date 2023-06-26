import React from 'react'
import ToggleButton from '../Layout/Dashboard/Icons/ToggleButton'

const handleClick = () => {
    console.log("You Clicked the Menu");
}

const MenuButton = () => {
    return (
        <div className='MenuContainer' >
            <div className='ToggleButton'onClick={handleClick}>
                <ToggleButton />
            </div>
        </div>
    )
}

export default MenuButton