import { ArrowUp } from "lucide-preact";
import { useEffect, useState } from "preact/hooks";

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div class="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        class={`p-3 rounded-full bg-gray-400 text-white shadow-lg transition-opacity duration-300 hover:bg-gray-500 hover:cursor-pointer ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
