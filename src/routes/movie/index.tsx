import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Container from "~/components/Container";
import MovieCategories from "~/components/Homepage/MovieCategories";
import Navbar from "~/components/Navbar/Navbar";
import type { TMovies } from "~/routes";

export default component$(() => {
  const movies = useMovies();
  const media_type = "movie";
  return (
    <div class="my-8">
      <Container>
        <Navbar />
        <div class="mt-8 flex flex-col space-y-6 md:space-y-3">
          <MovieCategories
            label="Movies"
            moviesLength={movies.value.length}
            movies={movies.value}
            media_type={media_type}
          />
        </div>
      </Container>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Movie | Qwik Movie",
  meta: [
    {
      name: "description",
      content: "list of popular tv show,",
    },
  ],
};

export const useMovies = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${requestEvent.env.get("TMDB_ACCESS_TOKEN")}`,
      },
    }
  );

  const { results } = await res.json();
  return results as TMovies[];
});
