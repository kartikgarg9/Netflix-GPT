import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonMovieDetail = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Header with Netflix Logo */}
      <header className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-75 flex items-center justify-between">
        <Skeleton className="w-32" height={40} />
      </header>

      {/* Background Video */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Foreground Content */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-center text-white">
        <Skeleton className="text-4xl font-bold" height={40} width={200} />
        <Skeleton className="text-sm mt-4" height={20} width={300} />
        <div className="flex flex-wrap justify-center mt-4">
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              className="rounded-full m-1 px-4 py-2"
              height={30}
              width={100}
            />
          ))}
        </div>
        <Skeleton className="text-xl mt-4" height={20} width={200} />
      </div>
    </div>
  );
};

export default SkeletonMovieDetail;
