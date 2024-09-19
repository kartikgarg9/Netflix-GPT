import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="relative group w-36 md:w-48 pr-4 transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + movie.poster_path}
        className="w-full h-full object-cover rounded-lg"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 ease-in-out rounded-lg">
        <span className="text-white text-lg font-bold">Watch Now</span>
      </div>
    </Link>
  );
};

export default MovieCard;
