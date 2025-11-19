
export default function CommentForm({ onSubmit, commentText, setCommentText }) {
 
  const handleOnChange =(e)=>{
    setCommentText(e.target.value)
  }
  
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center gap-3 border-t border-gray-200 p-3"
    >
      <input
        type="text"
        placeholder="Add a comment..."
        className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
        onChange ={handleOnChange}
        value={commentText}
      />
      <button
        type="submit"
        className="text-blue-500 font-semibold hover:text-blue-600"
      >
        Post
      </button>
    </form>
  );
}
