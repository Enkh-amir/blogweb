import { useEffect, useState } from "react";
import { filterItemsM } from "./filterItems";
import React from "react";

const BlogPostCardDara = [
  {
    url: "https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2023/06/QooApp_KonoSuba-S3.jpg",
    title: "Comedy",
    content:
      "KonoSuba: God's Blessing on This Wonderful World!,[Jp. 1] often referred to simply as KonoSuba, is a Japanese light novel series written by Natsume Akatsuki and illustrated by Kurone Mishima.",
    date: "August 20, 2022",
  },
  {
    url: "https://images.alphacoders.com/116/1163408.jpg",
    title: "Action",
    content:
      "Hunter × Hunter (pronounced hunter hunter) is a Japanese manga series written and illustrated by Yoshihiro Togashi.",
    date: "August 20, 2022",
  },
  {
    url: "https://external-preview.redd.it/tgMcNJDO3Bsh8SwLh2ycxdbJPJosxGD9y4JwM59G148.jpg?auto=webp&s=56896a16b5e8e3f7217e7a768ea6cadd456533ae",
    title: "Action",
    content:
      "Devilman Crybaby is a 2018 Japanese original net animation (ONA) series based on Go Nagai's manga series Devilman. ",
    date: "August 20, 2022",
  },
  {
    url: "https://cdn.theanimegallery.com/theanimegallery/6200e677-7212-4cd1-8e3b-409e0c589514-chainsaw-man-wallpaper-4k.webp",
    title: "Fantasy",
    content:
      "Chainsaw Man (Japanese: チェンソーマン, Hepburn: Chensō Man) is a Japanese manga series written and illustrated by Tatsuki Fujimoto. ",
    date: "August 20, 2022",
  },
  {
    url: "https://images6.alphacoders.com/712/712763.png",
    title: "Fantasy",
    content:
      "Re:Zero − Starting Life in Another World (Japanese: Re:ゼロから始める異世界生活, Hepburn: Re:Zero kara Hajimeru Isekai Seikatsu), often referred to simply as Re:Zero and also known as Re: Life in a different world from zero",
    date: "August 20, 2022",
  },
  {
    url: "https://images3.alphacoders.com/859/thumb-1920-859804.png",
    title: "Fantasy",
    content:
      "My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia) is a Japanese manga series written and illustrated by Kōhei Horikoshi.",
    date: "August 20, 2022",
  },
  {
    url: "https://preview.redd.it/oiwm7glsh0p91.png?auto=webp&s=9ac5fcbc887187a2a9910d961d4611378c88217f",
    title: "Adventure",
    content:
      "Cyberpunk: Edgerunners (Japanese: サイバーパンク エッジランナーズ, Hepburn: Saibāpanku Edjirannāzu) is a Japanese-Polish cyberpunk original net animation (ONA) miniseries based on the video game Cyberpunk 2077 by Polish studio CD Projekt Red.",
    date: "August 20, 2022",
  },
  {
    url: "https://wallpapers.com/images/featured/one-piece-c0pujiakubq5rwas.jpg",
    title: "Adventure",
    content:
      "One Piece (stylized in all caps) is a Japanese manga series written and illustrated by Eiichiro Oda.",
    date: "August 20, 2022",
  },
  {
    url: "https://4kwallpapers.com/images/wallpapers/vinland-saga-yellow-3840x2160-14818.jpg",
    title: "Drama",
    content:
      "Vinland Saga (Japanese: ヴィンランド・サガ, Hepburn: Vinrando Saga) is a Japanese historical manga series written and illustrated by Makoto Yukimura.",
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
              <div key={`items-${idx}`} className="blog-cont">
                <div className="read-more-img w-max flex flex-col gap-4 p-4 rounded-xl border-[1px] border-[#E8E8EA]">
                  <img
                    src={item.url}
                    alt=""
                    className="w-[360px] h-[240px] rounded-md object-cover relative"
                  />
                  <div className="absolute read-more-button">
                    <button>Read more</button>
                  </div>
                  <div className="flex flex-col p-2 w-[344px] gap-4 ">
                    <div className=" px-[10px] py-1 bg-custom-blue w-max font-wsans text-sm font-medium text-[#4B6BFB] ">
                      {item.title}
                    </div>
                    <div className="text-[#181A2A] text-2xl leading-7 font-medium font-wsans line-clamp-3">
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
