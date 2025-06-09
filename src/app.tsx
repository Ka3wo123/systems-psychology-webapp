import "@/app.css";
import Banner from "@/components/Banner";
import BioSection from "@/components/Bio";
import Contact from "@/components/Contact";
import EducationSection from "@/components/Education";
import Nav from "@/components/Nav";
import CertificatesSection from "@/components/Certificates";
import PayListSection from "./components/PayList";
import { useEffect } from "preact/hooks";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import ScrollUpButton from "./components/reusable/ScrollUpButton";

export function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <header className="w-full bg-[#be9a9a] px-5 md:px-12 py-4 shadow-xl z-40 relative rounded-b-xl">
        <div className="flex items-center justify-between">
          <Banner />
          <Nav />
        </div>
      </header>

      <main className="text-gray-900 min-h-screen px-6 md:px-12 mt-24">
        <div className="flex flex-col space-y-16">
          <BioSection />

          <EducationSection />

          <CertificatesSection />

          <PayListSection />

          <Contact />

          <ScrollUpButton />
        </div>
      </main>

      <Footer />
    </>
  );
}
