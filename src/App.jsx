import { useState, useEffect, useContext } from "react";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import './index.css' ;
import { addComment } from "./context/actions/comments";
import { globalContext } from "./context/provider";
import { ADD_COMMENT, ADD_COMMENT_ERROR } from "./context/types";

export default function App() {
  const [commentText, setCommentText] = useState('');
  const [comment, setComment] = useState('');
  const {commentState, commentDispatch} = useContext(globalContext)
  const [errors, setErrors] = useState(null)


  useEffect(()=>{
    const newComm = commentState?.addComment
    console.log('comment', newComm)
  if(newComm){
  setComment(newComm)
  //  commentDispatch({type: ADD_COMMENT, payload: null})
  }
 const commentError = commentState.addCommentError
  if(commentError){
   setErrors(commentError)
   commentDispatch({type: ADD_COMMENT_ERROR, payload: null})
  }
  },[commentState])

  const handleSubmit = async(e)=>{
     e.preventDefault()

   if(commentText.trim().length === 0){
    return
   }

    await addComment(commentText, commentDispatch)
    setCommentText('')
  }


  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">
     {errors && <p className="text-red-700">{errors}</p>}
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold">Comments</h1>
      </div>
      <CommentList comments={comment} />
      <CommentForm onSubmit={handleSubmit} setCommentText={setCommentText} commentText={commentText} />
    </div>
  );
}
