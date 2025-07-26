import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#181818]">
      <div className="inline-block relative w-20 h-20">
        <div className="absolute border-4 border-primary-corporate rounded-full opacity-100 border-t-transparent animate-spin w-full h-full"></div>
        <div className="absolute border-4 border-primary-corporate rounded-full opacity-20 w-full h-full"></div>
      </div>
    </div>
  );
};

export default Loading;