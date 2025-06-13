import { FileText } from "lucide-preact";

export default function Footer({
  onPrivacyClick,
}: {
  onPrivacyClick: () => void;
}) {
  return (
    <footer class="w-full bg-black flex justify-center p-5">
      <div class="flex flex-col justify-center gap-5 text-sm text-white items-center-safe lg:flex-row">
        <p>© 2025 www.beatazych.pl</p>
        <button
          onClick={onPrivacyClick}
          class="flex items-center hover:text-gray-200 hover:cursor-pointer"
        >
          <FileText />
          Polityka prywatności
        </button>
      </div>
    </footer>
  );
}
