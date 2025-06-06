import { DESCRIPTION } from "@/constants/bio";
import heroImg from "@/assets/placeholderHero.jpg";

export default function BioSection() {
  return (
    <section id="about" data-aos="fade-right" class="py-8 px-4 text-center">
      <div class="bg-gradient-to-br from-[#DED3D3] via-[#f1cfcf] to-[#DED3D3] p-10 rounded-tr-4xl rounded-bl-4xl">
        <img
          class="mx-auto mb-8 w-fit h-auto object-cover rounded-full shadow-2xl"
          src={heroImg}
          alt={"Beata Zych"}
        />
        <p class="text-4xl mb-3.5">Beata Zych</p>
        <p class="max-w-7xl mx-auto text-lg">{DESCRIPTION}</p>
      </div>
    </section>
  );
}
