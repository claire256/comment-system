import { createContext, useReducer } from "react";

const globalContext = createContext();

const Provider = ({children})=>{
    const [commentState, commentDispatch] = useReducer()
    return (
        <globalContext.Provider value={{commentState, commentDispatch}}>
            {children}
        </globalContext.Provider>
    )

}

export default Provider