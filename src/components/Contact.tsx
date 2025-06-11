/*
Google map sources: https://www.embed-map.com/
*/
import { Mail, MapPin, Phone } from "lucide-preact";
import SectionHeader from "@/components/reusable/SectionHeader";
import { APPOINTMENT_INFO, CONTACT_HEADER } from "@/constants/contact";

export default function ContactSection() {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const email = import.meta.env.VITE_EMAIL;
  const location = import.meta.env.VITE_LOCATION;

  return (
    <section id="contact" data-aos="fade-right" class="py-16 px-4">
      <div class="max-w-5xl mx-auto text-base">
        <SectionHeader title={CONTACT_HEADER} />

        <p class="mb-10 text-xs lg:text-xl">{APPOINTMENT_INFO}</p>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6 text-gray-700 text-base lg:text-xl">
            <div class="flex items-center gap-2">
              <Phone class="text-green-500" />
              <a
                href={`tel:${phoneNumber}`}
                class="text-blue-600 hover:underline"
              >
                {phoneNumber}
              </a>
            </div>

            <div class="flex items-center gap-2">
              <Mail class="text-black" />
              <a href={`mailto:${email}`} class="text-blue-600 hover:underline">
                {email}
              </a>
            </div>

            <div class="flex items-center gap-2">
              <MapPin class="text-red-600" />
              <p>{location}</p>
            </div>
          </div>
          <div class="w-full h-[25rem] rounded-xl overflow-hidden shadow-xl">
            <iframe
              title="Mapa lokalizacji"
              src="https://www.google.com/maps/embed/v1/place?q=pro+med.+nzoz.+gabinet+stomatologiczny&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              class="w-full h-full border-0"
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
