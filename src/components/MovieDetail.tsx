import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import {
  LuStar,
  LuStarHalf,
  LuCalendarDays,
  LuTimer,
} from "@qwikest/icons/lucide";

interface MovieDetailProps {
  title?: string;
  synopsis?: string;
}

const MovieDetail = component$(({ title, synopsis }: MovieDetailProps) => {
  const nav = useNavigate();

  return (
    <>
      <div class="md:flex md:justify-between items-end">
        <div>
          <h1 class="text-white text-5xl md:text-7xl w-[122px] font-bold uppercase">
            {title}
          </h1>
          <div class="flex flex-col space-y-2 mt-1">
            <div class="flex space-x-3">
              <span class="text-white text-sm">Drama, Romance</span>
              <span class="text-white text-sm flex items-center">
                <LuCalendarDays class="mr-0.5 text-yellow-400" />
                2021
              </span>
              <span class="text-white text-sm flex items-center">
                <LuTimer class="text-yellow-400 mr-0.5" />
                128 min
              </span>
            </div>
            <div class="flex space-x-3 items-center">
              <span class="text-white text-sm flex space-x-1 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <LuStar key={i} class="fill-yellow-400 text-yellow-400" />
                ))}
                <LuStarHalf class="fill-yellow-400 text-yellow-400" />
              </span>
              <span class="text-white text-sm border-2 uppercase px-1">
                pg-13
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
                onClick$={async () => await nav("/movie/121212")}
                class="text-sm border-2 border-yellow-400 text-yellow-400 px-1 hover:bg-yellow-400 hover:text-gray-900"
              >
                More
              </button>
            </div>
          </div>
        </div>

        {/* right element */}
        <div class="hidden md:max-w-md md:flex md:flex-col md:space-y-2">
          <p class="text-white text-sm text-right">
            Darriven Chazzile: <span class="text-yellow-300">Director</span>
          </p>
          <p class="text-white text-sm text-right">
            Ryan Gosling, Emma Stone: <span class="text-yellow-300">Stars</span>
          </p>
          <p class="text-white text-sm text-right font-medium">{synopsis}</p>
        </div>
      </div>
    </>
  );
});

export default MovieDetail;
