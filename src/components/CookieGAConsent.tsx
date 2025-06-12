import {
  COOKIES_INFO,
  ANALYTICS_COOKIES_DESCRIPRION,
  COOKIES_CONSENT_ACCEPTANCE,
  REJECT_CONSENT,
  COOKIES_CONSENT_REJECTION,
  ACCEPT_CONSENT,
} from "@/constants/cookies";
import { X } from "lucide-preact";
import { useEffect, useState } from "preact/hooks";
import ReactGA from "react-ga4";

export default function CookieConsent() {
  const [consent, setConsent] = useState(() =>
    localStorage.getItem("ga_consent")
  );
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (consent === "granted") {
      ReactGA.initialize(import.meta.env.VITE_GA_CODE);
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: document.title,
      });
    }
  }, [consent]);

  const giveConsent = () => {
    localStorage.setItem("ga_consent", "granted");
    setConsent("granted");
    closeModal();
  };

  const revokeConsent = () => {
    localStorage.removeItem("ga_consent");
    setConsent(null);
    closeModal();
  };

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeModal = () => {
    setTimeout(() => setShowModal(false), 300);
    setIsAnimating(false);
  };

  if (!consent) {
    return (
      <div class="fixed bottom-5 self-center mx-5 bg-white text-black p-4 shadow-md rounded-2xl z-50 text-sm sm:text-base">
        <div class="max-w-full mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p dangerouslySetInnerHTML={{ __html: COOKIES_INFO }}></p>
          <div class="flex gap-2">
            <button
              onClick={giveConsent}
              class="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 hover:cursor-pointer"
            >
              Akceptuję
            </button>
            <button
              onClick={() => setConsent("denied")}
              class="bg-gray-400 text-black px-4 py-1 rounded hover:bg-gray-500 hover:cursor-pointer"
            >
              Odrzuć
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={openModal}
        class="fixed bottom-6 left-6 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 hover:cursor-pointer z-50 flex items-center gap-2 group transition-all duration-500"
      >
        <span class="text-xl">🍪</span>
        <span class="overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[200px] transition-all duration-300 text-sm">
          Ustawienia cookies
        </span>
      </button>

      {showModal && (
        <div class="fixed inset-0 flex items-center justify-center z-50 m-5">
          <div
            class={`transform transition-all duration-500 ${
              isAnimating ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } bg-white rounded-lg p-6 w-full max-w-md shadow-lg text-center space-y-4`}
          >
            <div class="flex flex-row justify-between">
              <h2 class="text-2xl font-bold">Zgoda na analityczne cookies</h2>
              <X
                onClick={closeModal}
                size={25}
                class="hover:text-red-600 hover:cursor-pointer"
              />
            </div>

            <p class="text-base lg:text-xl text-left">
              {ANALYTICS_COOKIES_DESCRIPRION}
            </p>

            {consent === "granted" ? (
              <>
                {COOKIES_CONSENT_ACCEPTANCE.trim()
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p
                      key={idx}
                      class="text-base mb-4 lg:text-xl whitespace-pre-line text-left"
                    >
                      {paragraph}
                    </p>
                  ))}
                <button
                  onClick={revokeConsent}
                  class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 hover:cursor-pointer"
                >
                  {REJECT_CONSENT}
                </button>
              </>
            ) : (
              <>
                <p class="text-base lg:text-xl text-left">
                  {COOKIES_CONSENT_REJECTION}
                </p>
                <button
                  onClick={giveConsent}
                  class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 hover:cursor-pointer"
                >
                  {ACCEPT_CONSENT}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
