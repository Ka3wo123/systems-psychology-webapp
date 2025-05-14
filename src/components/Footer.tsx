import { PAGE_COPYRIGHT } from "@/constants/footer";

export default function Footer() {
  return (
    <footer class="w-full bg-black flex justify-center">
      <p className="text-sm text-center text-amber-50 md:text-left">
        {PAGE_COPYRIGHT}
      </p>
    </footer>
  );
}
