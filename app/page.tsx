'use client';

import { useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import MatchModal from '@/components/MatchModal';
import { User } from '@/lib/types';

const MOCK_USERS: User[] = [
  {
    id: 1,
    name: 'Sarah',
    age: 24,
    bio: 'Love hiking and coffee ☕',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop',
    distance: 3,
  },
  {
    id: 2,
    name: 'Emma',
    age: 26,
    bio: 'Foodie | Traveler | Dog mom 🐕',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop',
    distance: 5,
  },
  {
    id: 3,
    name: 'Jessica',
    age: 23,
    bio: 'Yoga enthusiast and beach lover 🌊',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1000&fit=crop',
    distance: 7,
  },
  {
    id: 4,
    name: 'Ashley',
    age: 25,
    bio: 'Artist | Music lover | Adventure seeker',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop',
    distance: 4,
  },
  {
    id: 5,
    name: 'Megan',
    age: 27,
    bio: 'Photographer exploring the world 📸',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1000&fit=crop',
    distance: 6,
  },
];

export default function Home() {
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<User[]>([]);
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [currentMatch, setCurrentMatch] = useState<User | null>(null);

  const handleLike = () => {
    if (currentIndex < users.length) {
      const likedUser = users[currentIndex];
      // Simulate 30% match rate
      if (Math.random() > 0.7) {
        setMatches([...matches, likedUser]);
        setCurrentMatch(likedUser);
        setShowMatchModal(true);
      }
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePass = () => {
    if (currentIndex < users.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentUser = users[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-orange-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          tinder
        </div>
        <button
          onClick={() => window.location.href = '/matches'}
          className="relative"
        >
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {matches.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {matches.length}
            </span>
          )}
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        {currentUser ? (
          <ProfileCard
            user={currentUser}
            onLike={handleLike}
            onPass={handlePass}
          />
        ) : (
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No more profiles</h2>
            <p className="text-gray-600">Check back later for more people!</p>
          </div>
        )}
      </div>

      {/* Match Modal */}
      {showMatchModal && currentMatch && (
        <MatchModal
          user={currentMatch}
          onClose={() => setShowMatchModal(false)}
        />
      )}
    </div>
  );
}
