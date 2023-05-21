import { component$ } from "@builder.io/qwik";
import { LuStar } from "@qwikest/icons/lucide";
import { Image } from "qwik-image";

interface MovieCardProps {
  title: string;
  date: string;
  image_path: string;
}

const MovieCard = component$(({ title, date, image_path }: MovieCardProps) => {
  const getYear = (date: string) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    return year;
  };

  return (
    <div class="max-w-full">
      <Image
        layout="fixed"
        src={`https://image.tmdb.org/t/p/original${image_path}`}
        alt={`${title} Image`}
        class="h-64 w-full rounded-md brightness-75 hover:brightness-100"
      />

      <div class="py-2 px-6 md:p-1">
        <div class="flex justify-between items-center">
          <h1 class="font-bold text-white flex-1 cursor-pointer hover:underline">
            {title}
          </h1>
        </div>
        <div class="mt-0.5 flex justify-between">
          <span class="flex items-center text-sm text-white">
            <LuStar class="fill-yellow-400 text-yellow-400 text-sm mr-1" /> 7.5
          </span>
          <span class="text-sm text-white">{getYear(date)}</span>
        </div>
      </div>
    </div>
  );
});

export default MovieCard;
