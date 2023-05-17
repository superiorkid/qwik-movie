import { Slot, component$ } from "@builder.io/qwik";
import Container from "~/components/Container";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar/Navbar";

export default component$(() => {
  return (
    <div class="mt-8">
      <Container>
        <Navbar />
        <Slot />
      </Container>
      <Footer />
    </div>
  );
});
