export default function Comment({ username, content, time }) {
  return (
    <div className="flex items-start gap-3 p-3 border-b border-gray-200">
      <img
        src={`https://ui-avatars.com/api/?name=${username}`}
        alt={username}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <div className="bg-gray-100 px-3 py-2 rounded-2xl">
          <span className="font-semibold mr-2">{username}</span>
          <span>{content}</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">{time}</span>
      </div>
    </div>
  ); 
}
