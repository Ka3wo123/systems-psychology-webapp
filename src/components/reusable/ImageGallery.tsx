import { useState, useEffect } from "preact/hooks";
import { X } from "lucide-preact";
import SectionHeader from "./SectionHeader";

interface ImageGalleryProps {
  images: string[];
  title: string;
  id?: string;
}

export default function ImageGallery({ images, title, id }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedImage]);

  const getGridClass = () => {
    if (images.length === 1) {
      return "flex justify-center";
    } else if (images.length === 2) {
      return "flex justify-center gap-6 flex-wrap";
    } else {
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2";
    }
  };

  return (
    <section id={id} data-aos="fade-right" class="py-12 px-4">
      <SectionHeader title={title} />
      <ul class={getGridClass()}>
        {images.map((img, index) => (
          <li key={index} class={images.length <= 2 ? "max-w-sm" : ""}>
            <img
              src={img}
              alt={`Obraz ${index + 1}`}
              class="max-w-lg h-auto rounded-lg cursor-pointer transition duration-300 transform hover:scale-101 hover:shadow-xl"
              onClick={() => setSelectedImage(img)}
            />
          </li>
        ))}
      </ul>

      {selectedImage && (
        <div
          class="absolute inset-0 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            class="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            aria-label="Zamknij"
          >
            <X size={32} class="hover:cursor-pointer" />
          </button>

          <img
            src={selectedImage}
            alt="Powiększony obraz"
            class="max-w-full h-auto rounded-lg shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
