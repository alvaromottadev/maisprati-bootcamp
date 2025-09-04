import { useEffect, useState } from "react";
import type { MovieType } from "../types/MovieType";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { Input } from "@/components/ui/input";

export default function Home() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, []);

  function searchMovie(name: string) {
    setIsLoading(true);
    if (name == "") return getMovies();
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: API_KEY,
          query: name,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .finally(() => setIsLoading(false));
  }

  function getMovies() {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <div>
        <div className="h-[4rem] bg-[#322866] items-center justify-between flex">
          <h1 className="text-4xl font-bold text-white ml-[1rem]">Filmes</h1>
          <Input
            placeholder="Buscar filme..."
            className="w-[30rem] mr-[1rem] placeholder:text-white text-white"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                searchMovie(event.currentTarget.value);
              }
            }}
          />
        </div>
        {!isLoading ? (
          <div className="flex flex-row flex-wrap gap-4 p-4 justify-center">
            {movies.length != 0 ? (
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
            ) : (
              <label>Nenhum filme encontrado.</label>
            )}
          </div>
        ) : (
          <label>Carregando filmes...</label>
        )}
      </div>
    </>
  );
}
