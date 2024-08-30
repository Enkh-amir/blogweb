import { useState } from "react";
import React from "react";

export const Carousel = () => {
  const slides = [
    {
      url: "https://wallpaper.forfun.com/fetch/34/34e2207671976941581bcfbf0c9a6b16.jpeg",
      tag: "Howl's Moving Castle",
      date: "November 20, 2004",
      content: "Howl's Moving Castle (Japanese: ハウルの動く城)",
    },
    {
      url: "https://images8.alphacoders.com/135/1354012.png",
      tag: "My Neighbor Totoro",
      date: "April 16, 1988",
      content: "My Neighbor Totoro (Japanese: となりのトトロ)",
    },
    {
      url: "https://i.pinimg.com/originals/79/66/1c/79661ce094727e32d528874bb9683fae.jpg",
      tag: "The Wind Rises",
      date: "July 20, 2013",
      content: "The Wind Rises (Japanese: 風立ちぬ)",
    },
    {
      url: "https://wallpapercat.com/w/full/1/6/d/138467-3840x2160-desktop-4k-spirited-away-wallpaper-image.jpg",
      tag: "Spirited Away",
      date: "July 20, 2001",
      content: "Spirited Away (Japanese: 千と千尋の神隠し)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    console.log(isLastSlide);
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: `cover`,
        }}
        className="h-[600px] rounded-xl duration-200 flex p-3 items-end"
      >
        <div className="shadow-md rounded-xl w-[50%] h-[40%] bg-[#FFF] flex flex-col p-10 gap-5 ">
          <div className="bg-[#4B6BFB] px-[10px] w-max rounded-md text-white text-sm font-medium py-1 ">
            {slides[currentIndex].tag}
          </div>
          <div className="text-[#181A2A] text-4xl font-semibold ">
            {slides[currentIndex].content}
          </div>
          <div className="text-[#97989F] text-base ">
            {slides[currentIndex].date}
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-3 gap-2">
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
