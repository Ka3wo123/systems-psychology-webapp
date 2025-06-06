interface SectionHeaderProps {
  title: string;
  className?: string;
}

<<<<<<< HEAD
export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className={`text-center mb-10 ${props.className}`}>
      <h2 className="text-3xl md:text-4xl italic font-playfair text-gray-800 relative inline-block">
        {props.title}
=======
export default function SectionHeader({
  title,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2 className="text-3xl md:text-4xl italic font-playfair text-gray-800 relative inline-block">
        {title}
>>>>>>> a419378 (Overall structure of page)
        <span className="block h-[2px] w-16 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mt-2" />
      </h2>
    </div>
  );
}
