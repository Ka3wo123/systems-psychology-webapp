import { DESCRIPTION } from "@/constants/bio";
import heroImg from "@/assets/placeholderHero.jpg";

export default function BioSection() {
  return (
    <section id="about" data-aos="fade-right" class="py-8 px-4 text-center">
      <img
        class="mx-auto mb-8 w-64 h-64 object-cover rounded-full"
        src={heroImg}
        alt={"Beata Zych"}
      ></img>
      <p class="text-4xl mb-3.5">Beata Zych</p>
      <p class="max-w-3xl mx-auto text-lg">{DESCRIPTION}</p>
    </section>
  );
}
