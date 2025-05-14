import { DESCRIPTION } from "../constants/bio";

export default function BioSection() {
  return (
    <section id="about" data-aos="fade-right" class="py-8 px-4 text-center">
      <img
        class="mx-auto mb-8 w-64 h-64 object-cover rounded-full"
        src={"/src/assets/placeholderHero.jpg"}
        alt={"Beata Zych"}
      ></img>
      <p class="max-w-3xl mx-auto text-lg">{DESCRIPTION}</p>
    </section>
  );
}
