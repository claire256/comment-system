import { createContext, useReducer } from "react";
import commentReducer, { initialCommentState } from "./reducers/comment";

export const globalContext = createContext();

const Provider = ({children})=>{
    const [commentState, commentDispatch] = useReducer(commentReducer, initialCommentState)
    return (
        <globalContext.Provider value={{commentState, commentDispatch}}>
            {children}
        </globalContext.Provider>
    )

}

export default Provider