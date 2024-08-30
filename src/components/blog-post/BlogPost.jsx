import { useState } from "react";

const BlogPostCardDara = [
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Technology",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];
// const [selectedFilters, setFilteredFilters] = useState();
// const [filteredItems, setFilteredItems] = useState(BlogPostCardDara);

let filters = ["Design", "Technology", "Software"];

export const BlogPost = () => {
  return (
    <div className="w-[1216px] flex flex-col ">
      <div className="flex flex-col gap-8">
        <div className="font-wsans font-bold text-2xl">All Blog Post</div>
        {/* <div className="button container">
          {filters.map((category, idx) => {
            <button
              onClick={() => {
                handleFilterButtonClick(category);
              }}
              className={`button ${
                selectedFilters?.includes(category) ? "active" : ""
              }`}
            ></button>;
          })}
        </div> */}
      </div>
      <div className="items container"></div>
    </div>
  );
};
