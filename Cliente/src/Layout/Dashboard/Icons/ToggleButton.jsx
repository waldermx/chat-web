import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../../Components/IconButtton'

const ToggleButton = ({ ...rest }) => {
    return (
        <IconButton fontAwesomeIcon={faBars}/>
    )
}

export default ToggleButton
