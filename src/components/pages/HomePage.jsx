import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { FooterPage } from "../footer/FooterPage";
import { Header } from "../header/Header";
import { TrendingCards } from "../trending/TrendingCards";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [article, setArticle] = useState([]);
  const [articleForSearch, setArticleForSearch] = useState([]);

  const fetchSearchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticleForSearch(data));
  };
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
    fetchSearchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-24 relative min-h-screen">
      <Header datas={articleForSearch} />
      <Carousel slides={article.slice(20, 30)} />
      <TrendingCards AnimeCard={article.slice(9, 13)} />
      <BlogPost BlogPostCardData={article} />
      <FooterPage />
    </div>
  );
}
