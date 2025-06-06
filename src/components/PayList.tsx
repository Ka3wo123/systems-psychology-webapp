import { SERVICE_HEADER, SERVICES } from "@/constants/services";
import ServiceCard from "@/components/reusable/ServiceCard";
import SectionHeader from "./reusable/SectionHeader";
import Tooltip from "./reusable/Tooltip";

export default function PayListSection() {
  return (
    <section id="pricing" data-aos="fade-right" className="py-12 px-4">
      <SectionHeader title={SERVICE_HEADER} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto justify-items-center">
<<<<<<< HEAD
        {SERVICES.map((s, index) => {
          const card = (
            <ServiceCard
              key={index}
              name={s.name}
              price={s.price}
              description={s.description}
            />
          );

          return s.additionalText ? (
            <Tooltip key={index} text={s.additionalText}>
              {card}
            </Tooltip>
          ) : (
            card
          );
        })}
=======
        {SERVICES.map((s, index) => (
          <ServiceCard
            key={index}
            name={s.name}
            price={s.price}
            description={s.description}
          />
        ))}
>>>>>>> 24654be (Add image modal)
      </div>
    </section>
  );
}
