import { createContext, useState } from "react";

//import ( createContext ) from 'react';

export const loginContext = createContext(null);

const ContextProvider = ({ children }) => {

    const [ account, setAccount ] = useState('');

    return (
        <loginContext.Provider
            value={{ account, setAccount }}
        >
            {children}
        </loginContext.Provider>
    )
}

export default ContextProvider;