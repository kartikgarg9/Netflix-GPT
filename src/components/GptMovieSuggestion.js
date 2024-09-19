import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Skeleton from "react-loading-skeleton"; // Skeleton for loading
import "react-loading-skeleton/dist/skeleton.css"; // Skeleton styles

const GptMovieSuggestion = () => {
  const { movieResults, movieNames, isLoading, error } = useSelector(
    (store) => store.gpt
  );

  if (error)
    return <p className="text-red-500">Error fetching movie suggestions</p>;

  if (isLoading) {
    return (
      <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
        <Skeleton count={3} height={40} width={200} className="mb-4" />
        {/* Add more skeletons as needed */}
      </div>
    );
  }

  if (!movieNames || movieNames.length === 0) {
    return (
      <p className="text-white">
        No movie suggestions available at the moment.
      </p>
    );
  }

  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
