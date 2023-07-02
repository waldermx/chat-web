import { createContext, useState } from "react";

export const messageContext = createContext();

export const MessageProvider = ({children})=>{

    const [message, setMessage] = useState({});

    return(
        <messageContext.Provider value={{message, setMessage}}>
            {children}
        </messageContext.Provider>
    )
}

