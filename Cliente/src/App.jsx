import React from 'react'
import './App.css'
import Chat from './Layout/Chat'
import BottomBar from './Layout/BottomBar'
import TopBar from './Components/TopBar'
import { MessageProvider } from './Context/MessageContext'
import { ConversationProvider } from './Context/ConversationContext'

const App = () => {
  return (
    <ConversationProvider>
      <MessageProvider>
        <TopBar />
        <Chat />
        <BottomBar />
      </MessageProvider>
    </ConversationProvider>
  )
}

export default App