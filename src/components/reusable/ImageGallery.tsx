import { useState, useEffect } from "preact/hooks";
import { X } from "lucide-preact";
import SectionHeader from "./SectionHeader";
import ModalPortal from "../ModalPortal";

interface ImageGalleryProps {
  images: string[];
  title: string;
  id?: string;
}

export default function ImageGallery(props: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedImage]);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 500);
  };

  const getGridClass = () => {
    if (props.images.length === 1) {
      return "flex justify-center";
    } else if (props.images.length === 2) {
      return "flex justify-center gap-6 flex-wrap";
    } else {
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2";
    }
  };

  return (
    <section id={props.id} data-aos="fade-right">
      <div class="max-w-6xl mx-auto">
        <SectionHeader title={props.title} />
        <ul class={getGridClass()}>
          {props.images.map((img, index) => (
            <li key={index} class="flex items-center justify-baseline">
              <img
                src={img}
                alt={`Obraz ${index + 1}`}
                class="w-100 max-w-[100%] h-auto rounded-lg cursor-pointer transition duration-300 transform hover:brightness-110"
                onClick={() => setSelectedImage(img)}
              />
            </li>
          ))}
        </ul>
      </div>

      {selectedImage && (
        <ModalPortal>
          <div
            class={`fixed inset-0 z-[1000] flex items-center justify-center bg-gray-900/70 backdrop-blur-sm transition-opacity duration-200 ${
              isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              class="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-[1001]"
              aria-label="Close"
            >
              <X size={32} class="hover:cursor-pointer" />
            </button>

            <img
              src={selectedImage}
              alt="Powiększony obraz"
              onClick={(e) => e.stopPropagation()}
              class={`max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl object-contain transition-transform duration-500 ${
                isVisible ? "scale-100" : "scale-0"
              }`}
            />
          </div>
        </ModalPortal>
      )}
    </section>
  );
}
