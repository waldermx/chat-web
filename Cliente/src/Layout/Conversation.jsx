import React from 'react'
import FlexDirectionColumn from '../Components/Containers/FlexDirectionColumn'
import MessagesMapped from '../Components/MessagesMapped';


const conversation = [
  '¡Hola! ¿Cómo estás?',
  '¡Hola John! Estoy bien, ¿y tú?',
  'Me alegro de que estés bien. ¿Qué has estado haciendo últimamente?',
  'He estado trabajando en un nuevo proyecto. Es emocionante.',
  'Eso suena genial. Si necesitas ayuda, no dudes en pedirla.',
];

const Conversation = () => {
  return (
    <FlexDirectionColumn reverse style={{ width: '100%' }}>
      <MessagesMapped messages={conversation} />
    </FlexDirectionColumn>
  )
}

export default Conversation