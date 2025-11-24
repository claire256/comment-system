export default function Comment({ content, time, handleDelete }) {
  return (
    <div className="flex items-start gap-3 p-3 border-b border-gray-200">
   
      <div className="flex flex-col">
        <div className="bg-gray-100 px-3 py-2 rounded-2xl">
          <span>{content}</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">{time}</span>
        <button type='submit' onSubmit={handleDelete} className="text-xs bg-red-500 text-white mt-2 rounded-2xl">del</button>
      </div>
    </div>
  ); 
}
