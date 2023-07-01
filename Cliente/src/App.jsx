import React from 'react'
import './App.css'
import Chat from './Layout/Chat'
import BottomBar from './Layout/BottomBarAndConfig'
import TopBar from './Components/TopBar'
// import io from 'socket.io-client'
// import { PORT } from '../../Server/config'

// const socket = io(`http://localhost:${PORT}`)

const App = () => {
  return (
    <div className='App'>
      <TopBar />
      <Chat />
      <BottomBar />
    </div>
  )
}

export default App