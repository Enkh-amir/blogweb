import React from "react";
import { TrendingCard } from "./TrendingCard";
import Link from "next/link";

export const TrendingCards = ({ blog = [] }) => {
  return (
    <div className="flex flex-col gap-7 items-start w-[1216px]">
      <div className="font-wsans font-bold text-2xl">Trending</div>
      <div className="flex w-full justify-between">
        {blog.map((card, index) => (
          <Link href={`/blog-list/${card.id}`} key={card.id}>
            <TrendingCard
              key={index}
              title={card?.tag_list[0] || "No Tag"}
              content={card?.title || "No Title"}
              bg={card?.cover_image || "no-image.jpg"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
