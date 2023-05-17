import { component$ } from "@builder.io/qwik";
import MovieCard from "../MovieCard";

interface MovieCategoriesProps {
  category: string;
  moviesLength: number;
}

const MovieCategories = component$(
  ({ category, moviesLength }: MovieCategoriesProps) => {
    const movies = Array.from(Array(moviesLength), (_, index) => ({
      id: index,
      key: "value",
    }));

    return (
      <div>
        <h1 class="font-semibold text-2xl md:text-3xl text-white">
          {category}
        </h1>
        <div class={`grid grid-cols-1 md:grid-cols-5 gap-6 mt-1.5`}>
          {movies.map((i) => (
            <MovieCard key={i.id} />
          ))}
        </div>
      </div>
    );
  }
);

export default MovieCategories;
