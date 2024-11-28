import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import SkeletonVideoBackground from "./SkeletonVideoBackground";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [isLoading, setIsLoading] = useState(true);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useEffect(() => {
    // Simulate loading time or fetch actual data to determine when loading is done
    const timer = setTimeout(() => setIsLoading(false), 2000); // Example delay
    return () => clearTimeout(timer);
  }, []);

  if (!movies || isLoading) {
    return (
      <div className="pt-[30%] bg-black md:pt-0">
        <SkeletonVideoBackground />
        <div className="p-4 bg-gray-800">
          <div className="h-6 bg-gray-700 mb-2 w-3/4" />
          <div className="h-4 bg-gray-700 w-1/2" />
        </div>
      </div>
    );
  }

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
