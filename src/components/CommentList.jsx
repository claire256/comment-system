import Comment from "./Comment";

export default function CommentList({ comments }) {
  return (
    <div className="max-h-80 overflow-y-auto ">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            key={comment.id}
            username={comment.username}
            content={comment.content}
            time={comment.created_at}
          />
        ))
      ) : (
        <p className="text-center text-gray-400 py-4">No comments yet</p>
      )}
    </div>
  );
}
