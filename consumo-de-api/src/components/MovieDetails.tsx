import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { MovieType } from "@/types/MovieType";

interface MovieDetails {
  children: React.ReactNode;
  movie: MovieType;
}

export default function MovieDetails({ children, movie }: MovieDetails) {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Detalhes sobre o Filme {movie.title}</DialogTitle>
          <DialogDescription>
            Aqui você verá detalhes sobre o filme {movie.title}
          </DialogDescription>
          <div className="flex flex-row">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              className="w-[50%] h-[20rem] object-cover rounded-sm shadow-lg"
            />
            <div className="flex flex-col gap-y-2 ml-[1rem]">
              <label>Nome: {movie.title}</label>
              <label>Data: {movie.release_date}</label>
              <label>Sinopse: {movie.overview}</label>
              <label>Avaliação: {movie.vote_average * 10}%</label>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
