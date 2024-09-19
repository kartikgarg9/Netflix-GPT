import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants"; // Import your constants for API options
import SkeletonMovieDetail from "./SkeletonMovieDetail"; // Import the skeleton component

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (id) {
      fetchMovieDetails();
      fetchMovieVideo();
    }
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await response.json();
      const trailer = data.results.find(
        (video) =>
          video.type === "Trailer" ||
          video.type === "Official Trailer" ||
          video.type === "Teaser" ||
          video.type === "Featurette" ||
          video.type.toLowerCase().includes("trailer")
      );

      if (trailer) {
        setVideo(trailer);
      } else {
        console.log("No trailer found"); // Log if no trailer is found
      }
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  if (!movie) return <SkeletonMovieDetail />; // Show the skeleton while loading

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Header with Netflix Logo */}
      <header className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-75 flex items-center justify-between">
        <img
          src="/images/netflix-logo.png" // Adjust path if needed
          alt="Netflix Logo"
          className="w-32"
        />
      </header>

      {/* Background Video */}
      {video && video.key && (
        <div className="absolute inset-0">
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1&loop=1&playlist=${video.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Foreground Content */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-4 text-center text-white">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="text-sm mt-4">{movie.overview}</p>
        <div className="flex flex-wrap justify-center mt-4">
          {movie.genres.map((genre) => (
            <p
              key={genre.id}
              className="rounded-full m-1 px-4 py-2 bg-teal-500 text-white"
            >
              {genre.name}
            </p>
          ))}
        </div>
        <p className="text-xl mt-4">
          {movie.status} &nbsp; {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
