import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import MovieCategories from "~/components/Homepage/MovieCategories";

export default component$(() => {
  return (
    <div class="mt-8 flex flex-col space-y-6 md:space-y-3">
      <MovieCategories category="TV Show" moviesLength={15} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "TV Show | Qwik Movie",
  meta: [
    {
      name: "description",
      content: "list of popular tv show,",
    },
  ],
};
