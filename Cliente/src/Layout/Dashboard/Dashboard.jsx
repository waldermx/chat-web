import React from 'react'
import ContainerDashboard from './ContainerDashboard'
import ToggleButton from './Icons/ToggleButton'
import MidDashboard from './Sections/MidDashboard'
import OptionsButton from './Icons/OptionsButton'


const Dashboard = () => {
    return (
        <ContainerDashboard>
            <ToggleButton />
            <MidDashboard />
            <OptionsButton />
        </ContainerDashboard>
    )
}

export default Dashboard