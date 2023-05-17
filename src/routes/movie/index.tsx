import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Container from "~/components/Container";
import MovieCategories from "~/components/Homepage/MovieCategories";
import Navbar from "~/components/Navbar/Navbar";

export default component$(() => {
  return (
    <div class="mt-8">
      <Container>
        <Navbar />
        <div class="mt-8 flex flex-col space-y-6 md:space-y-3">
          <MovieCategories category="Movies" moviesLength={15} />
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
