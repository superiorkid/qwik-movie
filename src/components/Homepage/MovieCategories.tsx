import { component$ } from "@builder.io/qwik";
import MovieCard from "../MovieCard";
import type { TMovies } from "~/routes";
import type { ITVs } from "~/typing/ITVs";

interface MovieCategoriesProps {
  label: string;
  moviesLength: number;
  movies: TMovies[] | ITVs[];
  media_type: "movie" | "tv";
}

const MovieCategories = component$(
  ({ label, moviesLength, movies, media_type }: MovieCategoriesProps) => {
    return (
      <div>
        <h1 class="font-semibold text-2xl md:text-3xl text-white">{label}</h1>
        <div class={`grid grid-cols-1 md:grid-cols-5 gap-6 mt-1.5`}>
          {movies.slice(0, moviesLength).map((movie) => (
            <MovieCard
              key={movie.id}
              title={
                media_type === "movie"
                  ? (movie as TMovies).title
                  : (movie as ITVs).name
              }
              date={
                media_type === "movie"
                  ? (movie as TMovies).release_date
                  : (movie as ITVs).first_air_date
              }
              media_type={media_type}
              movieId={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default MovieCategories;
