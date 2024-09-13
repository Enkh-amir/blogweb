import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";

export const BlogPost = ({ BlogPostCardData }) => {
  const [visible, setVisible] = useState(9);
  const [filteredItems, setFilteredItems] = useState(BlogPostCardData);
  const [selectedFilters, setSelectedFilters] = useState("All");
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const filters = [
    "All",
    "devchallenge",
    "watercooler",
    "career",
    "weeklyretro",
    "top7",
  ];

  useEffect(() => {
    if (selectedFilters === "All") {
      setFilteredItems(BlogPostCardData);
    } else {
      const newFilteredItems = BlogPostCardData.filter(
        (item) => item.tag_list[0] === selectedFilters
      );
      setFilteredItems(newFilteredItems);
    }
  }, [selectedFilters, BlogPostCardData]);

  const handleFilterButtonClick = (category) => {
    setSelectedFilters(category);
    setVisible(9);
  };

  const showMoreItems = () => {
    setVisible((prevVisible) => prevVisible + 9);
  };

  return (
    <div className="w-[1216px] flex flex-col">
      <div className="flex flex-col gap-8">
        <div className="font-wsans font-bold text-2xl">All Anime</div>
        <div className="px-3 glass-menu">
          <div className="flex justify-between items-center">
            <div className="flex gap-5">
              {filters.map((category, idx) => (
                <button
                  onClick={() => handleFilterButtonClick(category)}
                  className={`button ${
                    selectedFilters === category ? "active" : ""
                  } text-[black] font-wsans font-bold text-xs hover:text-[#D4A373]`}
                  key={`filters-${idx}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <Link href="/blog-list">
              <button className="text-[black] font-wsans font-bold text-xs cate-button">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="items w-[1222px] flex flex-wrap gap-5">
          {filteredItems.slice(0, visible).map((item) => (
            <Link href={`blog-list/${item.id}`} key={item.id}>
              <div className="">
                <div className="w-max h-[478px] flex flex-col gap-4 p-4 rounded-xl border-[1px] overflow-hidden bg-white border-[#E8E8EA]">
                  <div className="img-container rounded-md relative">
                    <img
                      src={item?.cover_image || "no-image.jpg"}
                      alt={item?.title || "no title"}
                      className="w-full h-full overflow-hidden  read-more-img rounded-md object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-2 w-[344px] h-full justify-between">
                    <div className="px-[10px] py-1 bg-custom-blue w-max font-wsans text-sm font-medium text-[#4B6BFB]">
                      {item?.tag_list[0] || "no tag"}
                    </div>
                    <div className="text-[#181A2A] text-2xl leading-7 font-medium font-wsans line-clamp-3">
                      {item?.title || "no title"}
                    </div>
                    <div className="font-wsans font-normal text-base text-[#97989F]">
                      {formatDate(item?.published_at)} 
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="w-full flex justify-center mt-11">
            {visible < filteredItems.length && (
              <button
                className="px-5 py-3 text-[white] font-wsans text-base border-[2px] rounded-md border-white load-more"
                onClick={showMoreItems}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
