import { SERVICE_HEADER, SERVICES } from "@/constants/services";
import ServiceCard from "@/components/reusable/ServiceCard";
import SectionHeader from "./reusable/SectionHeader";
<<<<<<< HEAD
import Tooltip from "./reusable/Tooltip";
=======
>>>>>>> a419378 (Overall structure of page)

export default function PayListSection() {
  return (
    <section id="pricing" data-aos="fade-right" className="py-12 px-4">
      <SectionHeader title={SERVICE_HEADER} />
<<<<<<< HEAD
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto justify-items-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            price={service.price}
            description={service.description}
          />
        ))}
>>>>>>> a419378 (Overall structure of page)
      </div>
    </section>
  );
}
