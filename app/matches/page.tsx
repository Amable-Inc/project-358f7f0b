'use client';

export default function Matches() {
  // Mock matches data
  const matches = [
    {
      id: 1,
      name: 'Sarah',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop',
      lastMessage: 'Hey! How are you?',
      time: '2m ago',
    },
    {
      id: 2,
      name: 'Emma',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop',
      lastMessage: 'Nice to match with you!',
      time: '1h ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-orange-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <button onClick={() => window.location.href = '/'}>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Matches
        </h1>
        <div className="w-6"></div>
      </header>

      {/* Matches List */}
      <div className="max-w-2xl mx-auto p-4">
        {matches.length > 0 ? (
          <div className="space-y-3">
            {matches.map((match) => (
              <div
                key={match.id}
                className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img
                  src={match.image}
                  alt={match.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">{match.name}</h3>
                  <p className="text-gray-500 text-sm">{match.lastMessage}</p>
                </div>
                <span className="text-gray-400 text-xs">{match.time}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No matches yet</h2>
            <p className="text-gray-600">Start swiping to find your match!</p>
          </div>
        )}
      </div>
    </div>
  );
}
