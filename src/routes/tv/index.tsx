import { component$ } from "@builder.io/qwik";
import Container from "~/components/Container";
import Navbar from "~/components/Navbar/Navbar";
import MovieCategories from "~/components/Homepage/MovieCategories";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { TMovies } from "~/routes";

export const useTvs = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
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

export default component$(() => {
  const tvs = useTvs();
  const media_type = "tv";
  return (
    <div class="my-8">
      <Container>
        <Navbar />
        <div class="mt-8 flex flex-col space-y-6 md:space-y-3">
          <MovieCategories
            label="Movies"
            moviesLength={15}
            movies={tvs.value}
            media_type={media_type}
          />
        </div>
      </Container>
    </div>
  );
});
