import { component$ } from "@builder.io/qwik";
import { type DocumentHead, server$ } from "@builder.io/qwik-city";
import MovieCategories from "~/components/Homepage/MovieCategories";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzM0YjEzOGJlY2M3MTY5NTk3MWMxNWEyZjNhMTMwOCIsInN1YiI6IjYyOGYzNTcxZDQ4Y2VlNmNiNDQ3Zjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_XqqG5aN3fzPfekZ5MRyPI5ZFL-s6Q2ZtTvyf03gU4",
  },
};

// export const getTrending = server$(async () => {
//   const res = await fetch(
//     "https://api.themoviedb.org/3/trending/all/6h?language=en-US",
//     options
//   )

//   if (!res.ok) {

//   }
// });

export default component$(async () => {
  // const trending = await getTrending();
  // console.log(trending);

  return (
    <div class="mt-8 flex flex-col space-y-6 md:space-y-3">
      <MovieCategories moviesLength={5} label="Trending" />
      <MovieCategories moviesLength={5} label="Upcoming" />
      <MovieCategories moviesLength={5} label="Recommended" />
      <MovieCategories moviesLength={5} label="In Theatre" />
      <MovieCategories moviesLength={5} label="Featured Today" />
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
