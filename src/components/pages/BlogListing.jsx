import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";

export const BlogListing = () => {
  const [article, setArticle] = useState([]);
  const publishedDate = new Date(article.published_at);
  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };
  const fetchData = () => {
    fetch(`https://dev.to/api/articles`)
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
        <Link href={`/${item.id}`} key={item.id}>
          <div className="w-max h-[478px] flex flex-col gap-4 p-4 rounded-xl border-[1px] overflow-hidden border-[#E8E8EA]">
            <div className="img-container">
              <img
                src={item.cover_image}
                alt={item.title}
                className="w-[360px] h-[240px] read-more-img rounded-md object-cover"
              />
            </div>
            <div className="flex flex-col p-2 w-[344px] h-full justify-between">
              <div className="px-[10px] py-1 bg-custom-blue w-max font-wsans text-sm font-medium text-[#4B6BFB]">
                {item.tag_list[0]}
              </div>
              <div className="text-[#181A2A] text-2xl leading-7 font-medium font-wsans line-clamp-3">
                {item.title}
              </div>
              <div className="font-wsans font-normal text-base text-[#97989F]">
                {publishedDate.getFullYear()}-
                {generatMonth(publishedDate.getMonth())}-
                {publishedDate.getDay()}
              </div>
            </div>
          </div>
        </Link>
      ))}
      <div className="w-full flex justify-center mt-11">
        {article.length > visible ? (
          <button
            className="px-5 py-3 text-[#696A75] font-wsans text-base border-[1px] rounded-md border-custom-border "
            onClick={showMoreItems}
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
};
