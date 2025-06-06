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
      <div className="circle circle1"></div>
      <div className="text-gray-900 min-h-screen px-6 md:px-12">
        <div className="flex items-start justify-between py-4 mb-56">
          <Banner />
          <Nav />
        </div>

        <div className="flex flex-col space-y-16">
          <BioSection />
          <EducationSection />
          <CertificatesSection />
          <PayListSection />
          <Contact />
          <ScrollUpButton />
        </div>
      </div>
      <Footer />
    </>
  );
}
