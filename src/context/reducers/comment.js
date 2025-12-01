import { ADD_COMMENT, ADD_COMMENT_ERROR, DELETE_COMMENT, DELETE_COMMENT_ERROR, GET_COMMENTS, GET_COMMENTS_ERROR } from "../types";

export const initialCommentState = {
    addComment: null,
    addCommentError: null,
    getComments: [],
    getCommentsError: null,
    deleteComment: null,
    deleteCommentError: null,
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
    case DELETE_COMMENT:
    return {...state, deleteComment: action.payload, getComments: state.getComments.filter((comment)=>comment.id !== action.payload), deleteCommentError: null}
    case DELETE_COMMENT_ERROR:
      return {...state, deleteCommentError: action.payload, deleteComment: null}
    default:
    return state
  }
}

export default commentReducer;