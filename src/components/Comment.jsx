export default function Comment({ content, time }) {
  return (
    <div className="flex items-start gap-3 p-3 border-b border-gray-200">
   
      <div className="flex flex-col">
        <div className="bg-gray-100 px-3 py-2 rounded-2xl">
          <span>{content}</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">{time}</span>
      </div>
    </div>
  ); 
}
