import React from 'react'
import './App.css'
import Chat from './Layout/Chat'
import BottomBar from './Layout/BottomBar'
import TopBar from './Components/TopBar'
import { ConversationProvider } from './Context/ConversationContext'

const App = () => {
  return (
    <ConversationProvider>
        <TopBar />
        <Chat />
        <BottomBar />
    </ConversationProvider>
  )
}

export default App