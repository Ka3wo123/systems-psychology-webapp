import { WORKER_NAME, SYSTEM_PSYCHOLOGY } from "@/constants/bio";
import logo from "@/assets/logo.webp";

export default function Banner() {
  return (
    <div class="flex flex-row gap-3">
      <img src={logo} alt="Logo" class="w-24 h-24" />

      <div class="flex flex-col items-start self-center">
        <p class="text-sm lg:text-xl text-white font-light">
          {SYSTEM_PSYCHOLOGY}
        </p>
        <p class="text-xl lg:text-2xl text-white font-bold">{WORKER_NAME}</p>
      </div>
    </div>
  );
}
