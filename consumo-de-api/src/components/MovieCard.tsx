import type { MovieType } from "../types/MovieType";
import MovieDetails from "./MovieDetails";

interface MovieCard {
  movie: MovieType;
}

export default function MovieCard({ movie }: MovieCard) {
  return (
    <>
      <MovieDetails movie={movie}>
        <div className="h-[23rem] w-[12rem] shadow-2xl cursor-pointer">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            className="h-[18rem] object-cover"
          />

          <div className="flex flex-col justify-center items-center h-[5rem] ">
            <label>{movie.title}</label>
            <label>{movie.release_date}</label>
          </div>
        </div>
      </MovieDetails>
    </>
  );
}
