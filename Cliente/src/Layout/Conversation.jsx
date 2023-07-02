import React from 'react'
import FlexDirectionColumn from '../Components/Containers/FlexDirectionColumn'
import Message from '../Components/Message'

const Conversation = () => {
  return (
    <FlexDirectionColumn reverse style={{width: '100%'}}>
      <Message text={"Hola María qué tal tu día? Dame buena puntería"}/>
    </FlexDirectionColumn>
  )
}

export default Conversation