import { $, component$, Slot } from "@builder.io/qwik";
import { type ImageTransformerProps, useImageProvider } from "qwik-image";

export default component$(() => {
  const imageTransformer$ = $(
    ({ src, width, height }: ImageTransformerProps): string => {
      return `${src}?w=${width}&h=${height}&format=webp`;
    }
  );

  useImageProvider({
    resolutions: [960],
    imageTransformer$,
  });

  return <Slot />;
});
