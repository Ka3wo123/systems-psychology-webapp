/*
Google map sources: https://www.embed-map.com/
*/
import { Mail, MapPin, Phone } from "lucide-preact";
import SectionHeader from "@/components/reusable/SectionHeader";
import { CONTACT_HEADER } from "@/constants/contact";

export default function ContactSection() {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const email = import.meta.env.VITE_EMAIL;
  const location = import.meta.env.VITE_LOCATION;

  return (
    <section id="contact" data-aos="fade-right" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title={CONTACT_HEADER} />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="text-green-500" />
              <a
                href={`tel:${phoneNumber}`}
                className="text-blue-600 hover:underline"
              >
                {phoneNumber}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="text-black" />
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:underline"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="text-red-600" />
              <p>{location}</p>
            </div>
          </div>
          <div className="w-full h-[20rem] rounded-xl overflow-hidden shadow-xl">
            <iframe
              title="Mapa lokalizacji"
              src="https://www.google.com/maps/embed/v1/place?q=ujejskiego&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
