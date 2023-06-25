import React from 'react'
import './App.css'
import Chat from './Layout/Chat'
import ChatBar from './Components/ChatBar'
import BottomBar from './Components/BottomBar'

const App = () => {
  return (
    <div className='App'>
      <ChatBar />
      <Chat />
    </div>
  )
}

export default App