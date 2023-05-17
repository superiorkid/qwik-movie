import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { LuStar, LuStarHalf } from "@qwikest/icons/lucide";
import { Image } from "qwik-image";
import Container from "~/components/Container";
import Navbar from "~/components/Navbar/Navbar";
import StarsCard from "~/components/StarsCard";

export default component$(() => {
  return (
    <div class="relative w-screen h-screen">
      <Image
        layout="fullWidth"
        src={`/images/lalaland/lalaland2.webp`}
        alt="movie banner"
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
              <h1 class="font-black text-white text-6xl uppercase w-1/4">
                la la land
              </h1>
              <p class="text-white text-justify">
                Aspiring actress serves lattes to movie stars in between
                auditions and jazz musician Sebastion scrapes by playing
                coctail-party gigs in dingy bars. But as success mounts, they
                are faced with decisions that fray the fragile fabric of their
                love affair, and the dreams they worked so hard to maintain in
                each other threaten to rip them apart.
              </p>
              <button class="bg-yellow-400 py-1.5  font-bold text-xl uppercase rounded-md flex-wrap">
                book
              </button>
            </div>

            {/* other side */}
            <div class="w-[320px] text-right text-white flex flex-col space-y-2.5 justify-end">
              <p>
                Damien Chazelle: <span class="text-yellow-400">Director</span>
              </p>
              <p>
                Ryan Gosling, Emma Stone:{" "}
                <span class="text-yellow-400">Stars</span>
              </p>
              <p class="flex justify-end items-center">
                {[1, 2, 3, 4].map((i) => (
                  <LuStar key={i} class="fill-yellow-400 text-yellow-400" />
                ))}
                <LuStarHalf class="fill-yellow-400 text-yellow-400" /> :{" "}
                <span>Rating</span>
              </p>
              <p>
                PG-13: <span class="text-yellow-400">Certification</span>
              </p>
              <p>
                Romance, Drama : <span class="text-yellow-400">Genre</span>
              </p>
              <p>
                USA, China, Hong Kong :{" "}
                <span class="text-yellow-400">Country</span>
              </p>
              <p>
                English : <span class="text-yellow-400">Language</span>
              </p>
              <p>
                128 min : <span class="text-yellow-400">Duration</span>
              </p>
              <p>
                Digital Intermediate (4K) :{" "}
                <span class="text-yellow-400">Format</span>
              </p>
              <p>
                Dolby Digital : <span class="text-yellow-400">Sound Mix</span>
              </p>
              <p>
                2.55 : 1 : <span class="text-yellow-400">Aspect Ratio</span>
              </p>
            </div>
          </div>

          {/* stars card */}
          <div class="mt-2">
            <h3 class="text-white">Starring</h3>
            <div class="grid grid-cols-7 gap-4 mt-1.5">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <StarsCard key={i} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  return {
    title: `${params.slug.toUpperCase()} | Qwik Movie`,
  };
};
