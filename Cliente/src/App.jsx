import React from 'react'
import './App.css'
import Chat from './Layout/Chat'
import ChatBar from './Components/ChatBar'
import BottomBar from './Layout/BottomBarAndConfig'
// import io from 'socket.io-client'
// import { PORT } from '../../Server/config'

// const socket = io(`http://localhost:${PORT}`)

const App = () => {
  return (
    <div className='App'>
      <ChatBar />
      <Chat />
      <BottomBar />
    </div>
  )
}

export default App