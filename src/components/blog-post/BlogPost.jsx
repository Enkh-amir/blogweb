import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";

export const BlogPost = (BlogPostCardData) => {
  const [visible, setVisible] = useState(9);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState("All");
  console.log(BlogPostCardData); 

  let filters = [
    "All",
    "devchallenge",
    "Fantasy",
    "Adventure",
    "Drama",
    "Comedy",
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
  };

  const showMoreItems = () => {
    setVisible((prevVisible) => prevVisible + 9);
  };

  return (
    <div className="w-[1216px] flex flex-col ">
      <div className="flex flex-col gap-8">
        <div className="font-wsans font-bold text-2xl">All Anime</div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            {filters.map((category, idx) => (
              <button
                onClick={() => handleFilterButtonClick(category)}
                className={`button ${
                  selectedFilters === category ? "active" : ""
                } text-[#495057] font-wsans font-bold text-xs hover:text-[#D4A373]`}
                key={`filters-${idx}`}
              >
                {category}
              </button>
            ))}
          </div>
          <Link href="/blog-list">
            <button className="text-[#495057] font-wsans font-bold text-xs cate-button">
              View All
            </button>
          </Link>
        </div>
        <div className="items w-[1222px] flex flex-wrap gap-5">
          {filteredItems.map((item, idx) => (
            <Link href={`/${item.id}`}>
              <div key={`items-${idx}`} className="">
                <div className="w-max flex flex-col gap-4 p-4 rounded-xl border-[1px] overflow-hidden border-[#E8E8EA]">
                  <div className="img-container">
                    <img
                      src={item.cover_image}
                      alt=""
                      className="w-[360px] h-[240px] read-more-img rounded-md object-cover "
                    />
                  </div>
                  <div className="flex flex-col p-2 w-[344px] gap-4 ">
                    <div className=" px-[10px] py-1 bg-custom-blue w-max font-wsans text-sm font-medium text-[#4B6BFB] ">
                      {item.tag_list[0]}
                    </div>
                    <div className="text-[#181A2A] text-2xl leading-7 font-medium font-wsans line-clamp-3">
                      {item.title}
                    </div>
                    <div className="font-wsans font-normal text-base text-[#97989F] ">
                      {item.readable_publish_date}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="w-full flex justify-center mt-11">
            {BlogPostCardData.length > visible ? (
              <button
                className="px-5 py-3 text-[#696A75] font-wsans text-base border-[1px] rounded-md border-custom-border load-more "
                onClick={showMoreItems}
              >
                Load More
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
