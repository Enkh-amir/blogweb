import { TrendingCard } from "./TrendingCard";
import { useState, useTransition } from "react";

export const TrendingCards = () => {
  const [AnimeCard, setAnimeCard] = useState([
    {
      title: "Chainsaw Man",
      content:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      bg: "https://laz-img-sg.alicdn.com/p/71e45f5ddb69bd75eba27b1e502fef1d.png",
    },
    {
      title: "Devilman Crybaby",
      content:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      bg: "https://m.media-amazon.com/images/M/MV5BZjYxMGRlZDAtYTU5Ny00NzhmLTgzYzgtNjNjNTZiZDQ5ZjU0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      title: "Jujutsu Kaisen",
      content:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      bg: "https://i.pinimg.com/originals/ac/43/52/ac4352f877cd4265d69538bd7532b7b3.jpg",
    },
    {
      title: "Dororo",
      content:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      bg: "https://rukminim2.flixcart.com/image/850/1000/l2jcccw0/poster/r/h/z/medium-dororo-manga-hd-matte-finish-poster-butcutnw10936-original-imagduu8ys5mxm7y.jpeg?q=90&crop=false",
    },
  ]);
  return (
    <div className="flex flex-col gap-7 items-start w-[1216px]">
      <div className="font-wsans font-bold text-2xl">Trending</div>
      <div className="flex w-full justify-between">
        {AnimeCard.map((card) => {
          return (
            <TrendingCard
              title={card.title}
              content={card.content}
              bg={card.bg}
            />
          );
        })}
      </div>
    </div>
  );
};
