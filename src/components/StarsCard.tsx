import { component$ } from "@builder.io/qwik";

const StarsCard = component$(() => {
  return (
    <div class="relative h-[189px] w-full">
      <div class="bg-gray-200 h-full w-full rounded-md flex justify-center items-center">
        Image
      </div>
      <span class="absolute text-white bottom-0 bg-gray-800/75 w-full text-center text-sm py-1 font-semibold">
        Ryan Gosling
      </span>
    </div>
  );
});

export default StarsCard;
