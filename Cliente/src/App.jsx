import React from 'react'
import './App.css'
import Chat from './Layout/Chat'
import BottomBar from './Layout/BottomBar'
import TopBar from './Components/TopBar'
import FlexDirectionColumn from './Components/Containers/FlexDirectionColumn'
// import io from 'socket.io-client'
// import { PORT } from '../../Server/config'

// const socket = io(`http://localhost:${PORT}`)

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