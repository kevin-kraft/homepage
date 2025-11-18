import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full h-auto sm:h-[80vh] px-4">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition self-center sm:self-auto hidden md:flex"
      >
        <ChevronLeft size={30} className="sm:w-10 sm:h-10 w-8 h-8" />
      </button>

      {/* Image */}
      <div className="w-full sm:w-4/5 h-64 sm:h-[70%] flex justify-center items-center overflow-hidden">
        <img
          src={images[index]}
          alt={`Bild ${index + 1}`}
          className="max-h-full max-w-full object-contain transition-all duration-300"
        />
      </div>
      <div className="flex">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition self-center sm:self-auto flex sm:hidden"
        >
          <ChevronLeft size={30} className="sm:w-10 sm:h-10 w-8 h-8" />
        </button>
        {/* Right Arrow */}
        <button
          onClick={next}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition self-center sm:self-auto"
        >
          <ChevronRight size={30} className="sm:w-10 sm:h-10 w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
