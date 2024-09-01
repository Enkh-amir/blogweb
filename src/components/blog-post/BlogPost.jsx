import { useEffect, useState } from "react";
import { filterItemsM } from "./filterItems";
import React from "react";

const BlogPostCardDara = [
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Comedy",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Action",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Action",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Fantasy",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Fantasy",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Fantasy",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Adventure",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Adventure",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    url: "https://motionbgs.com/media/2404/house-on-island-spirited-away.jpg",
    title: "Drama",
    content:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];

export const BlogPost = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(BlogPostCardDara);
  let filters = ["All", "Action", "Fantasy", "Adventure", "Drama", "Comedy"];
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = BlogPostCardDara.filter(
          (item) => item.title === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...BlogPostCardDara]);
    }
  };
  return (
    <div className="w-[1216px] flex flex-col ">
      <div className="flex flex-col gap-8">
        <div className="font-wsans font-bold text-2xl">All Anime</div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            {filters.map((category, idx) => {
              return (
                <button
                  onClick={() => handleFilterButtonClick(category)}
                  className={`button ${
                    selectedFilters?.includes(category) ? "active" : ""
                  } text-[#495057] font-wsans font-bold text-xs hover:text-[#D4A373]`}
                  key={`filters-${idx}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <button className="text-[#495057] font-wsans font-bold text-xs ">
            View All
          </button>
        </div>
        <div className="items w-[1222px] flex flex-wrap gap-5">
          {filteredItems.map((item, idx) => {
            return (
              <div key={`items-${idx}`} className="">
                <div className="w-max flex flex-col gap-4 p-4 rounded-xl border-[1px] border-[#E8E8EA]">
                  <img
                    src={item.url}
                    alt=""
                    className="w-[360px] h-[240px] rounded-md"
                  />
                  <div className="flex flex-col p-2 w-[344px] gap-4 ">
                    <div className=" px-[10px] py-1 bg-custom-blue w-max font-wsans text-sm font-medium text-[#4B6BFB] ">
                      {item.title}
                    </div>
                    <div className="text-[#181A2A] text-2xl leading-7 font-medium font-wsans ">
                      {item.content}
                    </div>
                    <div className="font-wsans font-normal text-base text-[#97989F] ">
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
