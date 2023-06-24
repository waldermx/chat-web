import React from 'react'
import ContainerDashboard from './ContainerDashboard'
import ToggleButton from './Icons/ToggleButton'
import MidDashboard from './Sections/MidDashboard'
import OptionsButton from './Icons/OptionsButton'
import TopDashboard from './Sections/TopDashboard'
import BottomDashboard from './Sections/BottomDashboard'


const Dashboard = () => {
    return (
        <ContainerDashboard>
            <TopDashboard/>
            <MidDashboard />
            <BottomDashboard/>
        </ContainerDashboard>
    )
}

export default Dashboard