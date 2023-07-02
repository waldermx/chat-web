import { createContext, useState } from "react";

export const ConversationContext = createContext();

export const ConversationProvider = ({children})=>{

    const [conversation, setConversation] = useState([]);

    const addMessage=(message)=>{
        setConversation([...conversation, message])
    }

    return(
        <ConversationContext.Provider value={{conversation, addMessage}}>
            {children}
        </ConversationContext.Provider>
    )
}
