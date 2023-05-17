import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { type IRouter } from "./Navbar";

interface DesktopNavProps {
  items: IRouter[];
}

const DesktopNav = component$(({ items }: DesktopNavProps) => {
  return (
    <div class="hidden md:flex md:space-x-8">
      {items.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          class={`font-semibold text-lg hover:text-yellow-400 text-white`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
});

export default DesktopNav;
