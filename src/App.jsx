import { useState } from "react";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import './index.css' ;

export default function App() {
  const [comments, setComments] = useState([
    // { id: 1, username: "claire", content: "This is so cool!", created_at: "2h ago" },
    // { id: 2, username: "john", content: "Love this post!", created_at: "1h ago" },
  ]);
  const handleSubmit = (e)=>{
     e.preventDefault()
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-semibold">Comments</h1>
      </div>
      <CommentList comments={comments} />
      <CommentForm onSubmit={handleSubmit} setComments={setComments} comments={comments} />
    </div>
  );
}
