import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { LuStar } from "@qwikest/icons/lucide";
import { Image } from "qwik-image";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import * as trace_events from "trace_events";
import { IImagesFormat } from "~/typing/IMovies";

interface MovieCardProps {
  title: string;
  date: string;
  media_type: string;
  movieId: number;
}

const MovieCard = component$(
  ({ title, date, media_type, movieId }: MovieCardProps) => {
    const getYear = (date: string) => {
      const newDate = new Date(date);
      const year = newDate.getFullYear();
      return year;
    };

    const getImageResouruce = useResource$(async ({ track, cleanup }) => {
      track(() => [media_type, movieId]);
      const controller = new AbortController();
      cleanup(() => controller.abort("cleanup"));

      const res = await fetch(
        `https://api.themoviedb.org/3/${media_type}/${movieId}/images`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzM0YjEzOGJlY2M3MTY5NTk3MWMxNWEyZjNhMTMwOCIsInN1YiI6IjYyOGYzNTcxZDQ4Y2VlNmNiNDQ3Zjg5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M_XqqG5aN3fzPfekZ5MRyPI5ZFL-s6Q2ZtTvyf03gU4",
          },
          signal: controller.signal,
        }
      );

      const { posters } = await res.json();
      return posters[0] as IImagesFormat;
    });

    return (
      <div class="max-w-full">
        <Resource
          value={getImageResouruce}
          onResolved={(image) => (
            <Image
              layout="fixed"
              src={`https://image.tmdb.org/t/p/original${image.file_path}`}
              alt={`${title} Image`}
              class="h-64 w-full rounded-md brightness-75 hover:brightness-100"
            />
          )}
        />

        <div class="py-2 px-6 md:p-1">
          <div class="flex justify-between items-center">
            <Link
              href={`/${media_type}/${movieId}`}
              class="font-bold text-white flex-1 cursor-pointer hover:underline"
            >
              {title}
            </Link>
          </div>
          <div class="mt-0.5 flex justify-between">
            <span class="flex items-center text-sm text-white">
              <LuStar class="fill-yellow-400 text-yellow-400 text-sm mr-1" />{" "}
              7.5
            </span>
            <span class="text-sm text-white">{getYear(date)}</span>
          </div>
        </div>
      </div>
    );
  }
);

export default MovieCard;
