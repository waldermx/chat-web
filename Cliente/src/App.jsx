import React from 'react'
import './App.css'
import Chat from './Layout/Chat'
import ChatBar from './Components/ChatBar'
import BottomBar from './Components/BottomBarAndConfig'

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