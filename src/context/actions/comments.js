import axios from "axios";
import { ADD_COMMENT, ADD_COMMENT_ERROR } from "../types";

export const addComment = async(dispatch, payload)=>{
  try{
const response = await axios.post('http://api/comments/', payload)
    console.log('response', response)
    dispatch({type: ADD_COMMENT , payload: response})
 }catch(error){
    console.log('errorrr', error)
     dispatch({type: ADD_COMMENT_ERROR , payload: error})
  }
}