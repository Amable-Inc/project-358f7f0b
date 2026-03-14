'use client';

import { useState } from 'react';
import { User } from '@/lib/types';

interface ProfileCardProps {
  user: User;
  onLike: () => void;
  onPass: () => void;
}

export default function ProfileCard({ user, onLike, onPass }: ProfileCardProps) {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    const distance = e.targetTouches[0].clientX - touchStart;
    if (distance > 50) {
      setSwipeDirection('right');
    } else if (distance < -50) {
      setSwipeDirection('left');
    } else {
      setSwipeDirection(null);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      onPass();
    }
    if (isRightSwipe) {
      onLike();
    }
    setSwipeDirection(null);
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="w-full max-w-sm">
      <div
        className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform ${
          swipeDirection === 'right' ? 'rotate-6' : swipeDirection === 'left' ? '-rotate-6' : ''
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Swipe Indicators */}
        {swipeDirection === 'right' && (
          <div className="absolute top-8 left-8 z-10 text-6xl font-bold text-green-500 border-4 border-green-500 px-4 py-2 rotate-12">
            LIKE
          </div>
        )}
        {swipeDirection === 'left' && (
          <div className="absolute top-8 right-8 z-10 text-6xl font-bold text-red-500 border-4 border-red-500 px-4 py-2 -rotate-12">
            NOPE
          </div>
        )}

        {/* Profile Image */}
        <div className="relative h-[500px]">
          <img
            src={user.image}
            alt={user.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h2 className="text-white text-3xl font-bold">
              {user.name}, {user.age}
            </h2>
            <p className="text-white/90 text-sm mt-1">📍 {user.distance} km away</p>
            <p className="text-white/80 text-base mt-2">{user.bio}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={onPass}
          className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          onClick={onLike}
          className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        <button
          onClick={() => {}}
          className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
