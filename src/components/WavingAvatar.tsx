import React, { useState } from 'react';

const WavingAvatar = () => {
  const [isWaving, setIsWaving] = useState(false);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  return (
    <div 
      className="relative cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* 3D Avatar Base */}
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
          {/* Face */}
          <div className="absolute inset-2 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full">
            {/* Eyes */}
            <div className="absolute top-4 left-3 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-black rounded-full"></div>
            
            {/* Smile */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-4 h-2 border-b-2 border-black rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Waving Hand */}
        <div className={`absolute -top-2 -right-2 text-xl sm:text-2xl transition-transform duration-300 ${
          isWaving ? 'animate-bounce' : 'hover:animate-pulse'
        }`}>
          <span className={`inline-block transition-transform duration-150 ${
            isWaving ? 'animate-wiggle' : ''
          }`}>
            👋
          </span>
        </div>

        {/* Floating particles when clicked */}
        {isWaving && (
          <>
            <div className="absolute -top-6 -left-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -top-4 -right-6 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-200"></div>
            <div className="absolute -bottom-2 -left-4 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-400"></div>
          </>
        )}
      </div>

      {/* Click me text */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Click to wave!
      </div>
    </div>
  );
};

export default WavingAvatar;