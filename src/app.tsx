import "@/app.css";
import Banner from "@/components/Banner";
import BioSection from "@/components/Bio";
import Contact from "@/components/Contact";
import EducationSection from "@/components/Education";
import Nav from "@/components/Nav";
import CertificatesSection from "@/components/Certificates";
import PayListSection from "./components/PayList";
import { useEffect, useState } from "preact/hooks";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import ScrollUpButton from "./components/reusable/ScrollUpButton";
import ReactGA from "react-ga4";
import CookieConsent from "./components/CookieGAConsent";
import PrivacyPolicy from "./components/PrivacyPolicy";

export function App() {
  const GA_CODE = import.meta.env.VITE_GA_CODE;
  const [gaEnabled, setGaEnabled] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const openPolicyModal = () => setIsPolicyOpen(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent) setGaEnabled(true);
  }, []);

  useEffect(() => {
    if (gaEnabled) {
      ReactGA.initialize(GA_CODE);
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "app.tsx",
      });
    }
  }, [gaEnabled]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <header class="w-full bg-[#be9a9a] px-5 md:px-12 py-4 shadow-xl z-40 relative rounded-b-xl">
        <div class="flex items-center justify-between">
          <Banner />
          <Nav />
        </div>
      </header>

      <main class="text-gray-900 min-h-screen px-6 md:px-12 mt-24">
        <div class="flex flex-col space-y-16">
          <BioSection />

          {/* <EducationSection /> */}

          {/* <CertificatesSection /> */}

          <PayListSection />

          <Contact />

          <ScrollUpButton />
          <CookieConsent />
        </div>
      </main>

      <Footer onPrivacyClick={openPolicyModal} />
      {isPolicyOpen && <PrivacyPolicy onClose={() => setIsPolicyOpen(false)} />}
    </>
  );
}
