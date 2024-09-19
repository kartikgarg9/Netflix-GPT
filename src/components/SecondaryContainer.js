import React, { useState } from "react";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetails"; // Import the new detailed view component
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const movies = useSelector((store) => store.movies);

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
        />
        <MovieList
          title={"Trending"}
          movies={movies.nowPlayingMovies}
          onMovieClick={handleMovieClick}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
          onMovieClick={handleMovieClick}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.nowPlayingMovies}
          onMovieClick={handleMovieClick}
        />
        <MovieList
          title={"Horror"}
          movies={movies.nowPlayingMovies}
          onMovieClick={handleMovieClick}
        />
      </div>
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
    </div>
  );
};

export default SecondaryContainer;
