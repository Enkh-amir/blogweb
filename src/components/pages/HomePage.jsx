import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { FooterPage } from "../footer/FooterPage";
import { Header } from "../header/Header";
import { TrendingCards } from "../trending/TrendingCards";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [article, setArticle] = useState([]);
  const [articleForSearch, setArticleForSearch] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles?per_page=100");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-24 relative min-h-screen">
      <Header datas={article} />
      <Carousel slides={article.slice(20, 30)} />
      <TrendingCards blog={article.slice(36, 40)} />
      <BlogPost BlogPostCardData={article} />
      <FooterPage />
    </div>
  );
}
