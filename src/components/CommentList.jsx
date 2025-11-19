import Comment from "./Comment";

export default function CommentList({ comments }) {
  return (
    <div className="max-h-80 overflow-y-auto ">
      {comments.length>0 ? 
      comments.map((comment)=>
       <Comment
       key={comment.id}
       content={comment.content}
        time={new Date(comment.created_at).toLocaleString()}
        />
      )
      : (
        <p className="text-center text-gray-400 py-4">No comments yet</p>
      )
      }
    </div>
  );
 
}
