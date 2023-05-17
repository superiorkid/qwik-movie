import { component$ } from "@builder.io/qwik";
import { LuStar } from "@qwikest/icons/lucide";

const MovieCard = component$(() => {
  return (
    <div class="max-w-full">
      <div class="bg-slate-200 h-72 md:h-48 w-full rounded-md flex justify-center items-center font-black text-slate-500 pointer-events-none">
        Image
      </div>
      <div class="py-2 px-6 md:p-1">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-white flex-1 cursor-pointer hover:underline">
            Spiderman: No Way Home
          </h1>
          <span class="text-white font-bold text-xs">HD</span>
        </div>
        <div class="mt-0.5 flex justify-between">
          <span class="flex items-center text-sm text-white">
            <LuStar class="fill-yellow-400 text-yellow-400 text-sm mr-1" /> 7.5
          </span>
          <span class="text-sm text-white">2023</span>
        </div>
      </div>
    </div>
  );
});

export default MovieCard;
