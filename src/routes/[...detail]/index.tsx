import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  useLocation,
} from "@builder.io/qwik-city";
import { Image } from "qwik-image";
import Container from "~/components/Container";
import Navbar from "~/components/Navbar/Navbar";
import ActresCard from "~/components/ActresCard";
import type { IImagesFormat, IMovie, IMovieCredit } from "~/typing/IMovies";
import MaterialSymbolsStarRate from "~/components/icons/MaterialSymbolsStarRate";
import MaterialSymbolsStarRateHalf from "~/components/icons/MaterialSymbolsStarRateHalf";

export const useMovieDetail = routeLoader$(async (requestEvent) => {
  const params = requestEvent.params.detail;
  const [media_type, movieId] = params.split("/");

  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${movieId}?language=en-US`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzM0YjEzOGJlY2M3MTY5NTk3MWMxNWEyZjNhMTMwOCIsInN1YiI6IjYyOGYzNTcxZDQ4Y2VlNmNiNDQ3Zjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_XqqG5aN3fzPfekZ5MRyPI5ZFL-s6Q2ZtTvyf03gU4`,
      },
    }
  );

  const movie = await res.json();
  return movie as IMovie;
});

export const useMovieImage = routeLoader$(async (requestEvent) => {
  const params = requestEvent.params.detail;
  const [media_type, movieId] = params.split("/");

  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${movieId}/images`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzM0YjEzOGJlY2M3MTY5NTk3MWMxNWEyZjNhMTMwOCIsInN1YiI6IjYyOGYzNTcxZDQ4Y2VlNmNiNDQ3Zjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_XqqG5aN3fzPfekZ5MRyPI5ZFL-s6Q2ZtTvyf03gU4`,
      },
    }
  );

  const { backdrops } = await res.json();
  return backdrops as IImagesFormat[];
});

export const useCredits = routeLoader$(async (requestEvent) => {
  const params = requestEvent.params.detail;
  const [media_type, movieId] = params.split("/");

  const res = await fetch(
    `https://api.themoviedb.org/3/${media_type}/${movieId}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzM0YjEzOGJlY2M3MTY5NTk3MWMxNWEyZjNhMTMwOCIsInN1YiI6IjYyOGYzNTcxZDQ4Y2VlNmNiNDQ3Zjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_XqqG5aN3fzPfekZ5MRyPI5ZFL-s6Q2ZtTvyf03gU4`,
      },
    }
  );

  const credits = await res.json();
  return credits as IMovieCredit;
});

export default component$(() => {
  const params = useLocation().params.detail;
  const [media_type] = params.split("/");

  const movie = useMovieDetail();
  const backdrops = useMovieImage();
  const credits = useCredits();

  const isMovie = media_type === "movie";

  const director = credits.value.crew
    .filter((person) => person.job === "Director")
    .map((director) => director.original_name);

  const cast = credits.value.cast
    .slice(0, 2)
    .map((actor) => actor.original_name);

  return (
    <>
      <div class="relative w-screen h-screen">
        <Image
          layout="fullWidth"
          src={`https://image.tmdb.org/t/p/original${backdrops.value[1].file_path}`}
          alt={`${movie.value.title} Image`}
          placeholder="#e6e6e6"
          class="w-full h-full brightness-50"
          loading="lazy"
        />

        <div class="absolute top-0 right-0 left-0 mt-8 z-40">
          <Container>
            <Navbar />
          </Container>
        </div>

        <div class="absolute bottom-0 right-0 left-0 pb-10">
          <Container>
            <div class="flex justify-between mt-24">
              <div class="w-[487px] flex flex-col space-y-4 justify-end">
                <h1 class="font-black text-white text-5xl uppercase w-1/4">
                  {isMovie ? movie.value.title : movie.value.name}
                </h1>
                <p class="text-white text-justify text-sm font-medium">
                  {movie.value.overview}
                </p>
                {/*<button class="bg-yellow-400 py-1.5  font-bold text-xl uppercase rounded-md flex-wrap">*/}
                {/*  book*/}
                {/*</button>*/}
              </div>

              {/* other side */}
              <div class="w-[350px] text-right text-white flex flex-col space-y-2.5 justify-end">
                {isMovie && (
                  <p>
                    {director.length > 1 ? director.join(", ") : director[0]}:{" "}
                    <span class="text-yellow-400">Director</span>
                  </p>
                )}

                <p>
                  {cast.join(", ")}: <span class="text-yellow-400">Stars</span>
                </p>
                <p class="flex justify-end items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <MaterialSymbolsStarRate
                      key={i}
                      class="text-yellow-400 text-lg"
                    />
                  ))}
                  <MaterialSymbolsStarRateHalf class="text-yellow-400 text-lg" />
                  : <span class="text-yellow-400">Rating</span>
                </p>
                <p>
                  {movie.value.genres.map((genre) => genre.name).join(", ")} :{" "}
                  <span class="text-yellow-400">Genre</span>
                </p>
                <p>
                  {movie.value.production_countries
                    .map((countries) => countries.name)
                    .join(", ")}{" "}
                  : <span class="text-yellow-400">Country</span>
                </p>
                <p>
                  {movie.value.spoken_languages
                    .map((language) => language.english_name)
                    .join(", ")}{" "}
                  : <span class="text-yellow-400">Language</span>
                </p>
                <p>
                  {movie.value.runtime} min :{" "}
                  <span class="text-yellow-400">Duration</span>
                </p>
              </div>
            </div>

            {/* stars card */}
            <div class="mt-2">
              <h3 class="text-white">Starring</h3>
              <div class="grid grid-cols-7 gap-4 mt-2">
                {credits.value.cast.splice(0, 7).map((cast) => (
                  <ActresCard
                    key={cast.id}
                    name={cast.name}
                    image={cast.profile_path}
                    castId={cast.id}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const movie = resolveValue(useMovieDetail);
  return {
    title: `${movie.title} | Qwik Movie`,
  };
};
