import { ADD_COMMENT, ADD_COMMENT_ERROR, GET_COMMENTS, GET_COMMENTS_ERROR } from "../types";

export const initialCommentState = {
    addComment: null,
    addCommentError: null,
    getComments: [],
    getCommentsError: null,
}
const commentReducer = (state, action)=>{
  switch(action.type){
     case ADD_COMMENT:
        return {...state, addComment: action.payload, getComments: [action.payload, ...state.getComments], addCommentErrror: null}
    case ADD_COMMENT_ERROR:
        return {...state, addComment: null, addCommentError: action.payload}
    case GET_COMMENTS:
      return {...state, getComments: action.payload, getCommentsError: null}
    case GET_COMMENTS_ERROR:
      return {...state, getCommentsError: action.payload, getComments: null}
    default:
    return state
  }
}

export default commentReducer;