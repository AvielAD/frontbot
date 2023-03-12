import { createContext, useState } from 'react';

const chat = [
    {
        id: '1',
        name: 'Bot',
        message: 'hola soy el bot bienvenido'
    }
]

export const MessagesContext = createContext();

export const MessagesProvider = ({children}) =>{
    const [messages, setMessages] = useState(chat);

    return(
        <MessagesContext.Provider value={{
            messages,
            setMessages
        }}>
            {children}
        </MessagesContext.Provider>
    )
}

