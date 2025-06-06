import { WORKER_NAME, SYSTEM_PSYCHOLOGY } from "@/constants/bio";
import logo from "@/assets/logoipsum-379.svg";

export default function Banner() {
  return (
    <div>
      <img src={logo} />
      <p class="text-xs   text-white font-light">{SYSTEM_PSYCHOLOGY}</p>
      <p class="text-xs  text-white font-bold">{WORKER_NAME}</p>
    </div>
  );
}
