import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type DocumentHead } from "@builder.io/qwik-city";
import Swiper from "swiper";

import swiperStyle from "swiper/swiper.css?inline";
import Container from "~/components/Container";

export default component$(() => {
  useStyles$(swiperStyle);

  useVisibleTask$(() => {
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  return (
    <Container>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-button-prev">prev</div>
        <div class="swiper-button-next">next</div>
      </div>
    </Container>

    // <div class="mt-8 flex flex-col space-y-6 md:space-y-3">
    //   <MovieCategories moviesLength={5} label="Trending" />
    //   <MovieCategories moviesLength={5} label="Upcoming" />
    //   <MovieCategories moviesLength={5} label="Recommended" />
    //   <MovieCategories moviesLength={5} label="In Theatre" />
    //   <MovieCategories moviesLength={5} label="Featured Today" />
    // </div>
  );
});

export const head: DocumentHead = {
  title: "Home | Qwik Movie",
  meta: [
    {
      name: "description",
      content: "list of popular movie and tv show",
    },
  ],
};

export const useTrending = routeLoader$(async (requestEvent) => {});
