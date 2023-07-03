import { createContext, useState, useEffect } from "react";
import io from 'socket.io-client';
import { PORT } from "../../../Server/config";

export const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const [conversation, setConversation] = useState([]);
  const [clientID, setClientID] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Crear la conexión del socket
    const newSocket = io(`ws://localhost:${PORT}`);
    setSocket(newSocket);

    // Listener on message: agregar mensaje a la conversación
    newSocket.on('message', (message) => {
      addMessage(message);
    });

    // Listener on clientID: obtener el ID del cliente
    newSocket.once('clientID', (id) => {
      setClientID(id);
    });

    // Limpiar la conexión del socket cuando el componente se desmonte
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const addMessage = (message) => {
    setConversation((prevConversation) => [...prevConversation, message]);
  };

  return (
    <ConversationContext.Provider value={{ conversation, socket, clientID }}>
      {children}
    </ConversationContext.Provider>
  );
};