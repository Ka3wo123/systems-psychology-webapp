import { SERVICE_HEADER, SERVICES } from "@/constants/services";
import ServiceCard from "@/components/reusable/ServiceCard";
import SectionHeader from "./reusable/SectionHeader";
import Tooltip from "./reusable/Tooltip";

export default function PayListSection() {
  return (
    <section id="pricing" data-aos="fade-right" class="py-12 px-4">
      <SectionHeader title={SERVICE_HEADER} />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto justify-items-center">
        {SERVICES.map((s, index) => {
          const card = (
            <ServiceCard
              key={index}
              name={s.name}
              price={s.price}
              description={s.description}
              duration={s.duration}
            />
          );

          return s.tooltip ? (
            <Tooltip key={index} text={s.tooltip}>
              {card}
            </Tooltip>
          ) : (
            card
          );
        })}
      </div>
    </section>
  );
}
