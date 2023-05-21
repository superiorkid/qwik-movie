import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const Logo = component$(() => {
  return (
    <strong class="text-xl md:text-3xl uppercase font-bold text-white">
      <Link href="/" class="font-mono">
        qwik-movie
      </Link>
    </strong>
  );
});

export default Logo;
