import { ADD_COMMENT, ADD_COMMENT_ERROR } from "../types";

export const initialCommentState = {
    addComment: null,
    addCommentErrror: null
}
const commentReducer = (state, action)=>{
  switch(action.type){
     case ADD_COMMENT:
        return {...state, addComment: action.payload, addCommentErrror: null}
    case ADD_COMMENT_ERROR:
        return {...state, addComment: null, addCommentErrror: action.payload}
    default:
    return state
  }
}

export default commentReducer