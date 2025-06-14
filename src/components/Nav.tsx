import { LINKS } from "@/constants/nav";
import { Menu, X } from "lucide-preact";
import { useState } from "preact/hooks";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav class="w-fit px-4 md:px-8 lg:px-12 flex top-1/2 right-0 z-50">
      <ul class="hidden md:flex gap-6 text-xl font-medium text-white items-center">
        {LINKS.map((item) => (
          <li key={item.href} class="relative group cursor-pointer">
            <a href={item.href} class="transition-colors duration-300">
              {item.label}
            </a>
            <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleMenu}
        class="md:hidden relative focus:outline-none hover:cursor-pointer text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <div
        class={`absolute mt-10 left-1/2 -translate-x-1/2 w-[90vw] rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out border bg-gray-200 border-white md:hidden ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul class="flex flex-col p-1 text-center font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                class="block p-4 rounded-lg hover:bg-white/30 transition-colors duration-300 text-"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
