import { X } from "lucide-preact";

export default function PrivacyPolicyModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const email = import.meta.env.VITE_EMAIL;
  return (
    <div class="fixed inset-0 m-1 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-xl max-w-3xl w-full shadow-lg relative overflow-y-auto max-h-[90vh] text-gray-800 text-sm leading-relaxed">
        <button
          class="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
          aria-label="Zamknij"
        >
          <X size={25} class="hover:text-red-600 hover:cursor-pointer" />
        </button>
        <h2 class="text-xl font-bold mb-4 text-center">
          📄 Polityka prywatności
        </h2>

        <section class="space-y-4">
          <p>
            <strong>1. Informacje ogólne</strong>
            <br />
            Niniejsza Polityka prywatności określa zasady przetwarzania danych
            oraz korzystania z plików cookies na stronie internetowej{" "}
            <strong>www.beatazych.pl</strong> (dalej: „Strona”). Szanujemy
            prywatność użytkowników i nie zbieramy żadnych danych osobowych
            odwiedzających stronę, za wyjątkiem danych zbieranych anonimowo
            przez Google Analytics – tylko w przypadku udzielenia wyraźnej
            zgody.
          </p>

          <p>
            <strong>2. Administrator danych</strong>
            <br />
            Właścicielem Strony i administratorem danych (w zakresie Google
            Analytics, jeśli wyrażono zgodę) jest:
            <br />
            <strong>mgr Beata Zych - terapeutka systemowa</strong>
            <br />
            <strong>{email}</strong>
          </p>

          <p>
            <strong>3. Zakres przetwarzanych danych</strong>
            <br />
            Strona nie gromadzi ani nie przetwarza żadnych danych osobowych
            użytkowników, takich jak imię, nazwisko, adres e-mail, numer
            telefonu czy adres IP w sposób umożliwiający identyfikację osoby.
            Jedynym wyjątkiem jest stosowanie Google Analytics, który – po
            wyrażeniu zgody przez użytkownika – zbiera anonimowe informacje
            statystyczne, takie jak: rodzaj urządzenia, przeglądarka,
            lokalizacja przybliżona (np. kraj), czas spędzony na stronie,
            odwiedzane podstrony. Dane te służą wyłącznie celom analitycznym i
            statystycznym.
          </p>

          <p>
            <strong>4. Pliki cookies</strong>
            <br />
            Strona korzysta z plików cookies w celu:
            <br />
            - zapamiętania decyzji użytkownika dotyczącej zgody na cookies,
            <br />
            - umożliwienia działania narzędzia Google Analytics (wyłącznie po
            wyrażeniu zgody).
            <br />
            <br />
            Cookies to niewielkie pliki tekstowe przechowywane na urządzeniu
            użytkownika, które mogą być odczytane przez nasz system lub systemy
            zewnętrzne (Google).
            <br />
            <br />
            Użytkownik ma możliwość:
            <br />
            - zaakceptowania lub odrzucenia cookies analitycznych podczas
            pierwszej wizyty,
            <br />- zmiany decyzji w dowolnym momencie poprzez kliknięcie ikony
            „Ustawienia cookies” dostępnej w lewym dolnym rogu strony.
          </p>

          <p>
            <strong>5. Google Analytics</strong>
            <br />
            Google Analytics to narzędzie firmy Google LLC (1600 Amphitheatre
            Parkway, Mountain View, CA 94043, USA), które pozwala analizować
            ruch na stronie internetowej. Wykorzystujemy je tylko po uzyskaniu
            zgody użytkownika, a dane zbierane są w sposób anonimowy i
            niepozwalający na identyfikację osoby.
            <br />
            Więcej informacji o Google Analytics:{" "}
            <a
              class="text-blue-600 underline"
              href="https://support.google.com/analytics/answer/6004245"
              target="_blank"
            >
              support.google.com/analytics/answer/6004245
            </a>
            <br />
            Polityka prywatności Google Analytics:{" "}
            <a
              class="text-blue-600 underline"
              href="https://policies.google.com/privacy?hl=pl"
              target="_blank"
            >
              https://policies.google.com/privacy?hl=pl
            </a>
          </p>

          <p>
            <strong>6. Zmiany w polityce prywatności</strong>
            <br />
            Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce
            prywatności. Aktualna wersja dokumentu będzie zawsze dostępna na
            stronie.
          </p>
        </section>
      </div>
    </div>
  );
}
