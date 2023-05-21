import { component$ } from "@builder.io/qwik";
import { Image } from "qwik-image";

interface ActresCardProps {
  name: string;
  image: string;
}

const ActresCard = component$(({ name, image }: ActresCardProps) => {
  return (
    <div class="relative h-[189px] w-full">
      <Image
        layout="fixed"
        src={`https://image.tmdb.org/t/p/original${image}`}
        loading="lazy"
        class="h-full w-full rounded-md"
        placeholder="#e6e6e6"
        alt={`${name} Image`}
      />
      <span class="absolute text-white bottom-0 bg-gray-800/75 w-full text-center text-sm py-1 font-semibold">
        {name}
      </span>
    </div>
  );
});

export default ActresCard;
