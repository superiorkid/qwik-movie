import { component$ } from "@builder.io/qwik";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SearchBar from "./SearchBar";

export interface IRouter {
  label: string;
  href: string;
}

const navItem: IRouter[] = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Movies",
    href: "/movie",
  },
  {
    label: "TV Shows",
    href: "/tv",
  },
];

const Navbar = component$(() => {
  return (
    <div class="flex justify-between items-center">
      <Logo />
      <div class="flex items-center space-x-5">
        <SearchBar />
        <DesktopNav items={navItem} />
        <MobileNav />
      </div>
    </div>
  );
});

export default Navbar;
