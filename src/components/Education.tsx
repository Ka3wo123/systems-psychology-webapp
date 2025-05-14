import { DIPLOMA_IMAGES, EDU_HEADER } from "@/constants/education";
import ImageGallery from "@/components/reusable/ImageGallery";

export default function EducationSection() {
  return (
    <ImageGallery id="education" images={DIPLOMA_IMAGES} title={EDU_HEADER} />
  );
}
