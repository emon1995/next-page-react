import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)]">
      <p className="lg:text-7xl text-5xl font-thin">L</p>
      <div className="inline-block animate-spin  border-8 border-dashed border-blue-500 w-10 h-10 rounded-full"></div>
      <p className="lg:text-7xl text-5xl font-thin">ading...</p>
    </div>
  );
};

export default LoadingSpinner;
