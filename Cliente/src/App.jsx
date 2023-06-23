import React from 'react'
import './App.css'
import Dashboard from './Layout/Dashboard'
import ToggleButton from './Components/ToggleButton'

const App = () => {
  return (
    <Dashboard>
      <ToggleButton/>
      <div className='OptionsMenu'></div>
      <div className='ChatsIcon'></div>
      <div className='ConfigIcon'></div>
      <div className='NewMessageIcon'></div>
    </Dashboard>
  )
}

export default App