'use client';

import { User } from '@/lib/types';

interface MatchModalProps {
  user: User;
  onClose: () => void;
}

export default function MatchModal({ user, onClose }: MatchModalProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 z-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8 animate-bounce">
          It's a Match!
        </h1>
        
        <div className="flex justify-center items-center gap-4 mb-8">
          <img
            src={user.image}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </div>

        <p className="text-white text-xl mb-8">
          You and {user.name} have liked each other!
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <button
            onClick={() => window.location.href = '/matches'}
            className="bg-white text-pink-500 font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            SEND MESSAGE
          </button>
          <button
            onClick={onClose}
            className="bg-transparent text-white font-bold py-4 px-8 rounded-full border-2 border-white hover:scale-105 transition-transform"
          >
            KEEP SWIPING
          </button>
        </div>
      </div>
    </div>
  );
}
