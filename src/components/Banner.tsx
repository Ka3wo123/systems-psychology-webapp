import { OWNER_NAME, SYSTEM_PSYCHOLOGY } from "@/constants/bio";

export default function Banner() {
  return (
    <div>
      <p class="text-xl sm:text-2xl md:text-3xl text-white font-light mb-2">
        {SYSTEM_PSYCHOLOGY}
      </p>
      <p class="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
        {OWNER_NAME}
      </p>
    </div>
  );
}
