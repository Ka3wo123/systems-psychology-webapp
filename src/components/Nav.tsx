import { LINKS } from "@/constants/nav";
import { Menu, X } from "lucide-preact";
import { useState } from "preact/hooks";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
<<<<<<< HEAD

  return (
    <nav class="w-fit px-4 md:px-8 lg:px-12 absolute top-10 right-0 z-50">
      <div class="w-full mx-auto flex justify-end">
        <ul class="hidden md:flex gap-6 text-lg font-medium text-white items-center">
          {LINKS.map((item) => (
            <li key={item.href} class="relative group cursor-pointer">
=======
  return (
    <nav class="w-fit px-4 md:px-8 py-4 text-white z-50 relative">
      <div id="desktop-menu" class="flex items-center justify-between">
        <button
          onClick={toggleMenu}
          class="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul class="hidden md:flex gap-6 text-lg font-medium">
          {LINKS.map((item) => (
            <li class="relative group cursor-pointer">
>>>>>>> a419378 (Overall structure of page)
              <a href={item.href} class="transition-colors duration-300">
                {item.label}
              </a>
              <span class="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
<<<<<<< HEAD

        <button
          onClick={toggleMenu}
          class="md:hidden absolute top-2 right-2 p-2 focus:outline-none hover:cursor-pointer text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        class={`absolute top-10 right-2 w-[90vw] rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out border bg-gray-200 border-white md:hidden ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul class="flex flex-col p-4 text-center font-medium">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                class="block p-4 rounded-lg hover:bg-white/30 transition-colors duration-300 text-"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
=======
      </div>

      <div
        id="mobile-menu"
        class={`absolute right-0 top-full w-fit overflow-hidden transform transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "max-h-96 w-2xl opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul class="flex flex-col gap-3 text-lg font-medium bg-gray-200 p-4 ">
          {LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                class="block px-2 py-1 hover:bg-blue-500 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
>>>>>>> a419378 (Overall structure of page)
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
