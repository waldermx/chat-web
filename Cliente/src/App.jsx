import React from 'react'
import './App.css'
import Chat from './Layout/Chat'
import BottomBar from './Layout/BottomBar'
import TopBar from './Components/TopBar'


const App = () => {
  return (
    <>
      <TopBar />
      <Chat />
      <BottomBar />
    </>
  )
}

export default App