import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
export const Carousel = ({ slides = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides.length]);
  return (
    <div className="container flex  justify-center items-center flex-col">
      <Link
        href={`/blog-list/${slides[currentIndex]?.id}`}
        key={slides[currentIndex]?.id}
      >
        <div
          style={{
            background: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${slides[currentIndex]?.cover_image}) lightgray 50%`,
            backgroundSize: `cover`,
          }}
          className="h-[600px] w-[1216px] rounded-xl duration-200 flex p-3 items-end"
        >
          <div className="shadow-md rounded-xl w-[50%] h-[45%] bg-[#FFF] flex flex-col justify-between p-10 ">
            <div className="bg-[#4B6BFB] px-[10px] w-max rounded-md text-white text-sm font-medium py-1 ">
              {slides[currentIndex]?.tag_list[0]}
            </div>
            <div className="text-[#181A2A] text-4xl font-semibold  line-clamp-2">
              {slides[currentIndex]?.title}
            </div>
            <div className="text-[#97989F] text-base ">
              {formatDate(slides[currentIndex]?.published_at)}
            </div>
          </div>
        </div>
      </Link>
      <div className="flex justify-end w-[1216px] mt-3 gap-2">
        <button onClick={prevSlide}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="5.5"
              stroke="#696A75"
            />
            <path
              d="M23.5 27L16 19.5L23.5 12"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button onClick={nextSlide}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="39"
              height="39"
              rx="5.5"
              stroke="#696A75"
            />
            <path
              d="M16 12L23.5 19.5L16 27"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
