import MovieCard from "./MovieCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieList = ({ title, movies, onMovieClick, isLoading }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      {/* Horizontal Scroll */}
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {isLoading
            ? [...Array(10)].map((_, index) => (
                <div key={index} className="w-36 md:w-48 pr-4">
                  <Skeleton height={240} width="100%" borderRadius={8} />
                </div>
              ))
            : movies?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={onMovieClick}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
