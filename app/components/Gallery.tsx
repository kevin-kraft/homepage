// Gallery.tsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "~/assets/project_img/gg-persistent-vehicles/img1.png"
import img2 from "~/assets/project_img/gg-persistent-vehicles/img2.png"
import img3 from "~/assets/project_img/gg-persistent-vehicles/img3.png"

const images = [
  "test", 
];
type GalleryProps = {
  galleryType?: string;

};

export default function Gallery({ galleryType }: GalleryProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="flex items-center justify-center gap-4 w-full h-[80vh]">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="p-2 rounded-full hover:bg-gray-200 transition"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Image */}
      <div className="w-[80%] h-[70%] flex justify-center items-center overflow-hidden">
        <img
          src={images[index]}
          alt={`Bild ${index + 1}`}
          className="max-h-full max-w-full object-contain transition-all duration-300"
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="p-2 rounded-full hover:bg-gray-200 transition"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
