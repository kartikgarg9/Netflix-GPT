import React from "react";

const SkeletonVideoBackground = () => {
  return (
    <div className="w-screen bg-gray-800 animate-pulse">
      <div className="w-screen aspect-video bg-gray-700" />
    </div>
  );
};

export default SkeletonVideoBackground;
