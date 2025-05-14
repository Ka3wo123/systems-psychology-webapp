import { CERTIFICATE_IMAGES, CERT_HEADER } from "@/constants/education";
import ImageGallery from "@/components/reusable/ImageGallery";

export default function CertificatesSection() {
  return (
    <ImageGallery
      id="certificates"
      images={CERTIFICATE_IMAGES}
      title={CERT_HEADER}
    />
  );
}
