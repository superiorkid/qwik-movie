import { component$, Slot } from "@builder.io/qwik";
import { useImageProvider } from "qwik-image";

export default component$(() => {
  useImageProvider({
    resolutions: [640],
  });
  return <Slot />;
});
