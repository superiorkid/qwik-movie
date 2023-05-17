import { component$ } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { Image } from "qwik-image";
import { LuChevronsDown } from "@qwikest/icons/lucide";

// local imports
import Container from "~/components/Container";
import MovieDetail from "~/components/MovieDetail";
import Navbar from "~/components/Navbar/Navbar";

export default component$(() => {
  const nav = useNavigate();

  return (
    <div class="relative w-screen h-screen">
      <Image
        layout="fullWidth"
        src={`/images/lalaland/lalaland1.jpg`}
        alt="movie banner"
        placeholder="#e6e6e6"
        class="w-full h-full brightness-50"
        loading="lazy"
      />

      {/* top element */}
      <div class="absolute top-0 right-0 left-0 mt-8 z-40">
        <Container>
          <Navbar />
        </Container>
      </div>

      {/* bottom element */}
      <div class="absolute bottom-24 right-0 left-0 z-40">
        <Container>
          <MovieDetail />
        </Container>
      </div>

      <div class="absolute bottom-0 right-0 left-0 pb-3 z-40">
        <Container>
          <div class="flex justify-center">
            <button onClick$={async () => await nav("/home")}>
              <LuChevronsDown class="text-2xl text-white motion-safe:animate-bounce" />
            </button>
          </div>
        </Container>
      </div>

      {/* <div class="absolute flex justify-between top-0 h-full z-40">
        <button class="text-gray-400 hover:text-white animate-pulse pl-3">
          <LuArrowLeft class="h-8 w-8" />
        </button>
        <button class="text-gray-400 hover:text-white animate-puls pr-3">
          <LuArrowRight class="h-8 w-8" />
        </button>
      </div> */}
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
