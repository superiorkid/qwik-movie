import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import MovieCategories from "~/components/Homepage/MovieCategories";

export default component$(() => {
  return (
    <div class="mt-8 flex flex-col space-y-6 md:space-y-3">
      <MovieCategories moviesLength={5} category="Trending" />
      <MovieCategories moviesLength={5} category="Upcoming" />
      <MovieCategories moviesLength={5} category="Recommended" />
      <MovieCategories moviesLength={5} category="In Theatre" />
      <MovieCategories moviesLength={5} category="Featured Today" />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home | Qwik Movie",
  meta: [
    {
      name: "description",
      content: "list of popular movie and tv show",
    },
  ],
};
