interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div class={`text-center mb-10 relative ${props.className}`}>
      <div class="absolute  top-0 left-1/2 -translate-x-[100%] w-50 h-4 bg-[#c543e6]  -z-10 rounded-2xl blur-2xl" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-50 h-4 bg-[#6e1515]  -z-10 rounded-2xl blur-2xl" />
      <div class="absolute top-0 left-1/2  w-50 h-4 bg-[#1e6ce0]  -z-10 rounded-2xl blur-2xl" />

      <h2 class="text-3xl md:text-4xl italic font-playfair text-gray-800 relative z-10 inline-block">
        {props.title}
      </h2>
    </div>
  );
}
