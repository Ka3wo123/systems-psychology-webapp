import { DESCRIPTION, HEADER_DESC } from "@/constants/bio";

export default function BioSection() {
  function fixOrphans(text: string): string {
    return text.replace(/ ([aiouwzAIUOWZ]) /g, " $1\u00A0");
  }

  return (
    <section id="about" data-aos="fade-right" class="py-8 px-4 text-center">
      <div class="bg-gradient-to-br from-[#DED3D3] via-[#f1cfcf] to-[#DED3D3] p-10 rounded-tr-4xl rounded-bl-4xl">
        {/* <img
          class="mx-auto mb-8 w-fit h-auto object-cover rounded-full shadow-2xl"
          src={heroImg}
          alt={"Beata Zych"}
        /> */}
        <p class="text-lg lg:text-2xl mb-3.5 font-semibold">{HEADER_DESC}</p>

        {DESCRIPTION.trim()
          .split("\n\n")
          .map((paragraph, idx) => (
            <p
              key={idx}
              class="text-sm mb-4 text-gray-700 sm:text-lg md:text-xl whitespace-pre-line text-left"
              dangerouslySetInnerHTML={{ __html: fixOrphans(paragraph.trim()) }}
            />
          ))}
      </div>
    </section>
  );
}
