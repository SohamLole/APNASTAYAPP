import React from 'react';

export const Hero3D = () => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FF8C42]/20 to-[#E91E63]/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#7CB342]/20 to-[#E91E63]/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#FF8C42]/10 to-[#7CB342]/10 rounded-full blur-2xl animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '2s' }} />
    </div>
  );
};
