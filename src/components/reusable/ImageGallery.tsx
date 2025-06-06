import { useState, useEffect } from "preact/hooks";
import { X } from "lucide-preact";
import SectionHeader from "./SectionHeader";
<<<<<<< HEAD
import ModalPortal from "../ModalPortal";
=======
>>>>>>> a419378 (Overall structure of page)

interface ImageGalleryProps {
  images: string[];
  title: string;
  id?: string;
}

<<<<<<< HEAD
export default function ImageGallery(props: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
=======
export default function ImageGallery({ images, title, id }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
>>>>>>> a419378 (Overall structure of page)

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
<<<<<<< HEAD
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
=======
>>>>>>> a419378 (Overall structure of page)
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedImage]);

<<<<<<< HEAD
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
=======
  const getGridClass = () => {
    if (images.length === 1) {
      return "flex justify-center";
    } else if (images.length === 2) {
>>>>>>> a419378 (Overall structure of page)
      return "flex justify-center gap-6 flex-wrap";
    } else {
      return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2";
    }
  };

  return (
<<<<<<< HEAD
    <section id={props.id} data-aos="fade-right">
      <div class="max-w-6xl mx-auto">
        <SectionHeader title={props.title} />
        <ul class={getGridClass()}>
          {props.images.map((img, index) => (
            <li key={index} class="flex items-center justify-baseline">
              <img
                src={img}
                alt={`Obraz ${index + 1}`}
                class="w-full max-w-[100%] h-auto rounded-lg cursor-pointer transition duration-300 transform hover:brightness-110"
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
                isVisible ? "scale-100" : "scale-125"
              }`}
            />
          </div>
        </ModalPortal>
=======
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
          class="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-center p-4"
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
            onClick={(e) => e.stopPropagation()}
          />
        </div>
>>>>>>> a419378 (Overall structure of page)
      )}
    </section>
  );
}
