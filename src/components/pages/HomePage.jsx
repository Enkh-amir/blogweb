import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { FooterHome } from "../footer/FooterHome";
import { Header } from "../header/Header";
import { TrendingCards } from "../trending/TrendingCards";
import { useEffect, useState } from "react";

export default function   HomePage() {
  const [article, setArticle] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-24 relative min-h-screen">
      <Header datas={article} />
      <Carousel slides={article.slice(20, 30)} />
      <TrendingCards AnimeCard={article.slice(9, 13)} />
      <BlogPost BlogPostCardData={article} />
      <FooterHome />
    </div>
  );
}
