import React from "react";

import { ChevronLeft, ChevronRight } from "react-feather";
import { AiOutlineHeart } from "react-icons/ai";
import { IoArrowRedoOutline } from "react-icons/io5";

interface Props {
  slides: string[];
}

const Carousels = ({ slides }: Props) => {
  const [slideIndex, setSlideIndex] = React.useState<number>(0);

  const handleNext = () => {
    setSlideIndex((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  const handlePrev = () => {
    setSlideIndex((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  return (
    <div className="overflow-hidden relative h-[200px] rounded-t-xl ">
      <div
        className="flex transition-transform ease-out duration-500 w-full"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <img
            src={slide}
            alt="slide"
            className="w-full h-full object-cover"
            key={slide}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handlePrev}
          className="text-gray-800 p-1 rounded-full shadow bg-white-80 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={handleNext}
          className="text-gray-800 p-1 rounded-full shadow bg-white-80 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                slideIndex === index ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-2">
          <IoArrowRedoOutline className="bg-white rounded-full w-12 h-12 p-2 hover:p-3 hover:bg-gray-200" />
          <AiOutlineHeart className="bg-white rounded-full w-12 h-12 p-2 hover:p-3 hover:bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Carousels;
