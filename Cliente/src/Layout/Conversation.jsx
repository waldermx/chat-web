import React from 'react'
import FlexDirectionColumn from '../Components/Containers/FlexDirectionColumn'
import MessagesMapped from '../Components/MessagesMapped';


const conversation = [
  {
    userID: 0,
    message: '¡Hola! ¿Cómo estás?',
  },
  {
    userID: 1,
    message: '¡Hola John! Estoy bien, ¿y tú?',
  },
  {
    userID: 0,
    message: 'Me alegro de que estés bien. ¿Qué has estado haciendo últimamente?',
  },
  {
    userID: 1,
    message: 'He estado trabajando en un nuevo proyecto. Es emocionante.',
  },
  {
    userID: 0,
    message: 'Eso suena genial. Si necesitas ayuda, no dudes en pedirla.',
  },
];

const Conversation = () => {
  return (
    <FlexDirectionColumn  style={{ width: '100%' }}>
      <MessagesMapped messages={conversation} />
    </FlexDirectionColumn>
  )
}

export default Conversation