import { FileText } from "lucide-preact";

export default function Footer({
  onPrivacyClick,
}: {
  onPrivacyClick: () => void;
}) {
  return (
    <footer class="w-full bg-black flex justify-center">
      <div class="flex justify-center gap-2 text-sm text-white">
        <p>© 2025 Twoja Nazwa</p>
        <button
          onClick={onPrivacyClick}
          class="flex gap-1 items-center hover:text-gray-200 hover:cursor-pointer"
        >
          <FileText />
          Polityka prywatności
        </button>
      </div>
    </footer>
  );
}
