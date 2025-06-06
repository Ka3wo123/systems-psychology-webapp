import { WORKER_NAME, SYSTEM_PSYCHOLOGY } from "@/constants/bio";
<<<<<<< HEAD
import logo from "@/assets/logoipsum-379.svg";
=======
>>>>>>> 24654be (Add image modal)

export default function Banner() {
  return (
    <div>
<<<<<<< HEAD
      <img src={logo} />
      <p class="text-xs   text-white font-light">{SYSTEM_PSYCHOLOGY}</p>
      <p class="text-xs  text-white font-bold">{WORKER_NAME}</p>
=======
      <p class="text-xl sm:text-2xl md:text-3xl text-white font-light mb-2">
        {SYSTEM_PSYCHOLOGY}
      </p>
      <p class="text-3xl sm:text-4xl md:text-5xl text-white font-bold">
        {WORKER_NAME}
      </p>
>>>>>>> 24654be (Add image modal)
    </div>
  );
}
