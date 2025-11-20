import axios from "axios";
import { ADD_COMMENT, ADD_COMMENT_ERROR, GET_COMMENTS, GET_COMMENTS_ERROR } from "../types";

export const addComment = async(content, dispatch)=>{
  try{
const response = await axios.post('http://localhost:5000/api/comments/', {content: content})
    dispatch({type: ADD_COMMENT , payload: response.data})
 }catch(error){
     dispatch({type: ADD_COMMENT_ERROR , payload: error.response?.data | error?.message})
  }
}

export const getComments = async(dispatch)=>{
  try{
const response = await axios.get('http://localhost:5000/api/comments',)
console.log('response', response)
dispatch({type: GET_COMMENTS, payload: response.data})
  }catch(error){
    console.log('error', error)
dispatch({type: GET_COMMENTS_ERROR, payload: error.message | error.response?.data})

  }
}