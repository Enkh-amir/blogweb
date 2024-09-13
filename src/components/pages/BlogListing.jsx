import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";

export const BlogListing = () => {
  const [article, setArticle] = useState([]);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [visible, setVisible] = useState(12);
  const showMoreItems = () => {
    setVisible((prevVisible) => prevVisible + 9);
  };
  return (
    <div className="w-[1222px] flex flex-wrap gap-5">
      {article.slice(0, visible).map((item, idx) => (
        <Link href={`blog-list/${item.id}`} key={item.id}>
          <div className="w-max h-[478px] flex flex-col gap-4 p-4 rounded-xl border-[1px] overflow-hidden border-[#E8E8EA]">
            <div className="img-container">
              <img
                src={item.cover_image || "no-image.jpg"}
                alt={item.title}
                className="w-[360px] h-[240px] read-more-img rounded-md object-cover"
              />
            </div>
            <div className="flex flex-col p-2 w-[344px] h-full justify-between">
              <div className="px-[10px] py-1 bg-custom-blue w-max font-wsans text-sm font-medium text-[#4B6BFB]">
                {item.tag_list[0] || "no tag"}
              </div>
              <div className="text-[#181A2A] text-2xl leading-7 font-medium font-wsans line-clamp-3">
                {item.title || "no title"}
              </div>
              <div className="font-wsans flex gap-5 items-center font-medium text-base text-[#97989F]">
                <div className="flex gap-3 text-[#97989F] items-center font-wsans text-base font-medium">
                  <img
                    src={item.user?.profile_image_90}
                    className="w-7 h-7 rounded-[50%] "
                    alt=""
                  />
                  <div>{item.user?.name} </div>
                </div>
                {formatDate(item.published_at)}
              </div>
            </div>
          </div>
        </Link>
      ))}
      <div className="w-full flex justify-center mt-11">
        {article.length > visible ? (
          <button
            className="px-5 py-3 text-[#696A75] font-wsans text-base border-[1px] rounded-md border-custom-border load-more"
            onClick={showMoreItems}
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
};
