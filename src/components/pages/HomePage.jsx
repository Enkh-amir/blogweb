import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { FooterHome } from "../footer/FooterHome";
import { Header } from "../header/Header";
import { TrendingCards } from "../trending/TrendingCards";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-24">
      <Header />
      <Carousel />
      <TrendingCards />
      <BlogPost />
      <FooterHome />
    </div>
  );
}
