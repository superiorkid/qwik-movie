import { Slot, component$ } from "@builder.io/qwik";

const Container = component$(() => {
  return (
    <div class="max-w-6xl mx-auto px-3">
      <Slot />
    </div>
  );
});

export default Container;
