import { LINKS } from "@/constants/nav";
import { Menu, X } from "lucide-preact";
import { useState } from "preact/hooks";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav class="fixed top-4 right-10 md:static text-white z-50 ">
      <div id="desktop-menu" class="flex items-center justify-between">
        <button
          onClick={toggleMenu}
          class="md:hidden focus:outline-none hover:cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul class="hidden md:flex gap-6 text-lg font-medium">
          {LINKS.map((item) => (
            <li class="relative group cursor-pointer">
              <a href={item.href} class="transition-colors duration-300">
                {item.label}
              </a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="mobile-menu"
        class={`absolute top-auto right-0 w-[80vw] rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out border-1 md:hidden bg-zinc-200 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul class="flex flex-col p-4 text-base font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                class="block p-4 rounded-lg hover:bg-white/30 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </a>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
