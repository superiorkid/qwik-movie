// TODO: FUTURE FIX THE MOVIE TYPE

import {
  component$,
  Resource,
  useResource$,
  useSignal,
} from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  useNavigate,
} from "@builder.io/qwik-city";
import {
  LuArrowLeft,
  LuArrowRight,
  LuCalendarDays,
  LuChevronsDown,
  LuStar,
  LuStarHalf,
  LuTimer,
} from "@qwikest/icons/lucide";

// local importsx
import Container from "~/components/Container";
import Navbar from "~/components/Navbar/Navbar";
import type { IMovie } from "~/typing/IMovies";
import type { ITVs } from "~/typing/ITVs";

export type TMovies = Pick<
  IMovie,
  | "adult"
  | "backdrop_path"
  | "id"
  | "title"
  | "original_language"
  | "original_title"
  | "overview"
  | "poster_path"
  | "media_type"
  | "genres_ids"
  | "popularity"
  | "release_date"
  | "video"
  | "vote_average"
  | "vote_count"
>;
type TMovieById = Omit<IMovie, "media_type" | "genres_ids">;

export const useMovies = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?language=en-US",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${requestEvent.env.get("TMDB_ACCESS_TOKEN")}`,
      },
    }
  );

  const { results }: { results: TMovies[] } = await res.json();
  const movies = results.map((movie) => ({
    id: movie.id,
    media_type: movie.media_type,
  }));
  return movies;
});

export default component$(() => {
  const nav = useNavigate();
  const popularMovie = useMovies();
  const position = useSignal(0);
  const isMovieType = popularMovie.value[position.value].media_type === "movie";

  const movieResource = useResource$(async ({ track, cleanup }) => {
    track(() => [
      popularMovie.value[position.value].id,
      popularMovie.value[position.value].media_type,
      isMovieType,
    ]);
    const controller = new AbortController();
    cleanup(() => controller.abort());

    if (isMovieType) {
      const res = await fetch(
        `https://api.themoviedb.org/3/${
          popularMovie.value[position.value].media_type
        }/${popularMovie.value[position.value].id}?language=en-US`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzM0YjEzOGJlY2M3MTY5NTk3MWMxNWEyZjNhMTMwOCIsInN1YiI6IjYyOGYzNTcxZDQ4Y2VlNmNiNDQ3Zjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_XqqG5aN3fzPfekZ5MRyPI5ZFL-s6Q2ZtTvyf03gU4`,
          },
          signal: controller.signal,
        }
      );
      const movie = await res.json();
      if (isMovieType) {
        return movie as TMovieById;
      } else {
        return movie as ITVs;
      }
    }
  });

  // const movieCreditResource = useResource$(async ({ track, cleanup }) => {
  //   track(() => [
  //     popularMovie.value[position.value].id,
  //     popularMovie.value[position.value].media_type,
  //     isMovieType,
  //   ]);
  //
  //   const controller = new AbortController();
  //   cleanup(() => controller.abort());
  //
  //   const res = await fetch(
  //     `https://api.themoviedb.org/3/${popularMovie.value[position.value].id}/${
  //       isMovieType ? "movie" : "tv"
  //     }/credits?language=en-US`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Accept: "Application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzM0YjEzOGJlY2M3MTY5NTk3MWMxNWEyZjNhMTMwOCIsInN1YiI6IjYyOGYzNTcxZDQ4Y2VlNmNiNDQ3Zjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_XqqG5aN3fzPfekZ5MRyPI5ZFL-s6Q2ZtTvyf03gU4",
  //       },
  //       signal: controller.signal,
  //     }
  //   );
  //   const credits = await res.json();
  //   console.log(credits);
  //   return credits as IMovieCredit[];
  // });

  const getYear = (date: string) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    return year;
  };

  return (
    <div class="relative w-screen h-screen">
      <Resource
        value={movieResource}
        onResolved={(movie) => (
          <>
            <img
              width={500}
              height={500}
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt={`movie image`}
              placeholder="#e6e6e6"
              class="w-full h-full brightness-75 object-cover"
              loading="lazy"
              decoding="async"
            />

            {/* top element */}
            <div class="absolute top-0 right-0 left-0 mt-8 z-40">
              <Container>
                <Navbar />
              </Container>
            </div>

            <div class="absolute bottom-24 right-0 left-0 z-40">
              <Container>
                <div class="md:flex md:justify-between items-end">
                  <div>
                    <h1 class="text-white text-5xl md:text-7xl w-[122px] font-bold uppercase">
                      {isMovieType ? movie.title : movie.name}
                    </h1>
                    <div class="flex flex-col space-y-2 mt-1">
                      <div class="flex space-x-3">
                        <span class="text-white text-sm">
                          {movie?.genres.map((genre) => genre.name).join(", ")}
                        </span>
                        <span class="text-white text-sm flex items-center">
                          <LuCalendarDays class="mr-0.5 text-yellow-400" />
                          {getYear(
                            isMovieType
                              ? movie?.release_date
                              : movie?.first_air_date
                          )}
                        </span>
                        {isMovieType && (
                          <span class="text-white text-sm flex items-center">
                            <LuTimer class="text-yellow-400 mr-0.5" />
                            {movie?.runtime} min
                          </span>
                        )}
                      </div>
                      <div class="flex space-x-3 items-center">
                        <span class="text-white text-sm flex space-x-1 items-center">
                          {[1, 2, 3, 4].map((i) => (
                            <LuStar
                              key={i}
                              class="fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <LuStarHalf class="fill-yellow-400 text-yellow-400" />
                        </span>
                        <span class="text-white text-sm border-2 uppercase px-1">
                          {isMovieType ? "movie" : "tv"}
                        </span>
                      </div>
                      <div class="flex space-x-5">
                        <span class="uppercase text-sm bg-yellow-400 px-1 font-semibold rounded-sm cursor-pointer">
                          book
                        </span>
                        <span class="text-sm border-2 border-yellow-400 text-yellow-400 px-1">
                          Reviews
                        </span>
                        <button
                          onClick$={async () =>
                            await nav(
                              `/${
                                popularMovie.value[position.value].media_type
                              }/${movie.id}`
                            )
                          }
                          class="text-sm border-2 border-yellow-400 text-yellow-400 px-1 hover:bg-yellow-400 hover:text-gray-900"
                        >
                          More
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="hidden md:max-w-md md:flex md:flex-col md:space-y-2">
                    {/*<p class="text-white text-sm text-right">*/}
                    {/*  Anne Marie:{" "}*/}
                    {/*  <span class="text-yellow-300">Director</span>*/}
                    {/*</p>*/}
                    {/*<p class="text-white text-sm text-right">*/}
                    {/*  Ryan Gosling, Emma Stone:{" "}*/}
                    {/*  <span class="text-yellow-300">Stars</span>*/}
                    {/*</p>*/}
                    {/* right element */}
                    <span class="text-yellow-400 text-right">Description</span>
                    <p class="text-white text-sm text-right font-medium">
                      {movie.overview}
                    </p>
                  </div>
                </div>
              </Container>
            </div>

            {/*<div class="absolute bottom-24 right-0 left-0 z-40">*/}
            {/*  <Container>*/}
            {/*    <MovieDetail title={movie.title} synopsis={movie.overview} />*/}
            {/*  </Container>*/}
            {/*</div>*/}

            <div class="absolute bottom-0 right-0 left-0 pb-3 z-40">
              <Container>
                <div class="flex justify-center">
                  <button onClick$={async () => await nav("/home")}>
                    <LuChevronsDown class="text-2xl text-white motion-safe:animate-bounce" />
                  </button>
                </div>
              </Container>
            </div>

            <div class="absolute flex justify-between top-0 h-full w-full">
              <button
                class={`text-gray-400 hover:text-white animate-pulse z-50 pl-3 ${
                  position.value == 0 && "invisible"
                }`}
                onClick$={() => {
                  position.value--;
                }}
              >
                <LuArrowLeft class="h-8 w-8" />
              </button>
              <button
                class={`text-gray-400 hover:text-white animate-pulse z-50 pr-3 ${
                  position.value >= popularMovie.value.length - 1 && "invisible"
                }`}
                onClick$={() => {
                  position.value++;
                }}
              >
                <LuArrowRight class="h-8 w-8" />
              </button>
            </div>
          </>
        )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Movie App",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
