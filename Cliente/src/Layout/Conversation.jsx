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
  {
    userID: 1,
    message: '¡Gracias! Seguro lo tendré en cuenta.',
  },
  {
    userID: 0,
    message: 'Por supuesto, estamos aquí para apoyarnos mutuamente.',
  },
  {
    userID: 1,
    message: '¡De acuerdo! ¿Quieres tomar un café esta tarde?',
  },
  {
    userID: 0,
    message: '¡Claro! Nos vemos en la cafetería a las 4 p.m.',
  },
  {
    userID: 0,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    userID: 1,
    message: 'Praesent aliquam turpis auctor, commodo lectus nec, luctus odio.',
  },
  {
    userID: 0,
    message: 'Sed vestibulum purus sit amet libero volutpat, id cursus leo fringilla.',
  },
  {
    userID: 1,
    message: 'Maecenas at eros ut justo rutrum consequat.',
  },
  {
    userID: 0,
    message: 'Nam volutpat ex at lectus dapibus, nec dictum sem tincidunt.',
  },
  {
    userID: 1,
    message: 'Curabitur lobortis velit id nunc semper finibus.',
  },
  {
    userID: 0,
    message: 'Nullam at tortor nec ligula luctus rutrum.',
  },
  {
    userID: 1,
    message: 'Fusce dapibus quam et ultrices mollis.',
  },
  {
    userID: 0,
    message: 'Donec auctor nunc sit amet mauris aliquet, ut rhoncus elit feugiat.',
  },
];



const Conversation = () => {
  return (
    <FlexDirectionColumn style={{ width: '100%', marginBottom:'50px' }}>
      <MessagesMapped messages={conversation} />
    </FlexDirectionColumn>
  )
}

export default Conversation