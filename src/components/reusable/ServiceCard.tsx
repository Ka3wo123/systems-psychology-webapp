import type { ServiceCard } from "@/constants/services";
import { Clock } from "lucide-preact";

export default function ServiceCard(props: ServiceCard) {
  return (
    <div class="w-full sm:max-w-lg md:max-w-xl rounded-2xl shadow-2xl p-8 bg-gradient-to-br from-rose-200 to-blue-200 break-words overflow-hidden text-center">
      <h3 class="text-2xl lg:text-3xl font-light text-gray-800 mb-4 break-words">
        {props.name}
      </h3>

      <div class="flex items-center gap-2 mb-4">
        <hr class="flex-grow border-gray-500" />
        <span class="flex items-center text-fuchsia-600 font-bold text-5xl whitespace-nowrap overflow-hidden text-ellipsis">
          {props.price}
        </span>
        <hr class="flex-grow border-gray-500" />
      </div>
      <div class="text-black lg:text-lg text-sm flex gap-2 items-center justify-center">
        <Clock />
        {props.duration}
      </div>
    </div>
  );
}
