import { createContext, useState } from 'react';
import io from 'socket.io-client';


const SocketContext = createContext();

export const SocketProvider = ({children}) =>{

    return(
        <SocketContext.Provider value={ io(process.env.NEXT_PUBLIC_URL_REAL) }>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext;
