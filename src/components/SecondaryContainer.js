import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetails";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    // Simulate loading time or fetch actual data to determine when loading is done
    const timer = setTimeout(() => setIsLoading(false), 2000); // Example delay
    return () => clearTimeout(timer);
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
          onMovieClick={handleMovieClick}
          isLoading={isLoading}
        />
        <MovieList
          title={"Trending"}
          movies={movies.trendingMovies} // Update if necessary
          onMovieClick={handleMovieClick}
          isLoading={isLoading}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
          onMovieClick={handleMovieClick}
          isLoading={isLoading}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.upcomingMovies} // Update if necessary
          onMovieClick={handleMovieClick}
          isLoading={isLoading}
        />
        <MovieList
          title={"Horror"}
          movies={movies.nowPlayingMovies} // Update if necessary
          onMovieClick={handleMovieClick}
          isLoading={isLoading}
        />
      </div>
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </div>
  );
};

export default SecondaryContainer;
