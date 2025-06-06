import { Info } from "lucide-preact";
import { useState } from "preact/hooks";

type TooltipProps = {
  text: string;
  children: preact.ComponentChildren;
  position?: "top" | "bottom";
};

export default function Tooltip({
  text,
  children,
  position = "top",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipPosition =
    position === "top" ? "bottom-full mb-2" : "top-full mt-2";

  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  const closeTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div
      class="relative inline-block group"
      onClick={toggleTooltip}
      onMouseLeave={closeTooltip}
    >
      {children}

      <div
<<<<<<< HEAD
        class={`absolute ${tooltipPosition} left-1/2 -translate-x-1/2 p-3 text-xs text-black bg-white rounded whitespace-normal w-full h-auto break-words opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 ${
=======
        class={`absolute ${tooltipPosition} left-1/2 -translate-x-1/2 p-3 text-sm text-black bg-white rounded whitespace-normal w-full h-auto break-words opacity-0 oncl group-hover:opacity-100 transition-opacity duration-300 z-50 ${
>>>>>>> e7e889c (Add tooltip, adjust map and navbar)
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } group-hover:opacity-100`}
      >
        <Info />
        {text}
      </div>
    </div>
  );
}
