import { component$ } from "@builder.io/qwik";
import Container from "./Container";

const Footer = component$(() => {
  return (
    <div class="bg-gray-800 mt-6">
      <Container>
        <div class="py-3 flex justify-between items-center">
          <span class="text-white text-sm">&copy; Copyright 2023</span>
          <span class="text-white text-sm">qwik-movie</span>
        </div>
      </Container>
    </div>
  );
});

export default Footer;
