import { WORKER_NAME, SYSTEM_PSYCHOLOGY } from "@/constants/bio";
import logo from "@/assets/logoipsum-379.svg";

export default function Banner() {
  return (
    <div class="flex flex-row gap-3">
      <img src={logo} alt="Logo" class="w-12 h-12" />

      <div class="flex flex-col items-start sm:items-start">
        <p class="text-xs lg:text-xl text-white font-light">
          {SYSTEM_PSYCHOLOGY}
        </p>
        <p class="text-sm lg:text-3xl text-white font-bold">{WORKER_NAME}</p>
      </div>
    </div>
  );
}
