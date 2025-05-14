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
            <div>
              <div class="flex items-center gap-2">
                <Phone />
                <a href={`tel:${phoneNumber}`} className="text-blue-600">
                  {phoneNumber}
                </a>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <Mail />
              <div>
                <a href={`mailto:${email}`} className="text-blue-600 ">
                  {email}
                </a>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <MapPin />
              <p>{location}</p>
            </div>
          </div>

          <div className="w-full h-full md:h-[100%] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Mapa lokalizacji"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1791453653855!2d21.01222841616206!3d52.22967597975769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6696d4e0b5%3A0x45e52b142001ecf4!2sWarszawa!5e0!3m2!1spl!2spl!4v1617982310765!5m2!1spl!2spl"
              width="100%"
              height="100%"
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
