import { FooterHome } from "@/components/footer/FooterHome";
import { Header } from "@/components/header/Header";
import { BlogListing } from "@/components/pages/BlogListing";

export default function BlogCard() {
  return (
    <div className="w-full flex gap-12 items-center flex-col">
      <Header />
      <div className="w-[1222px] flex font-wsans text-2xl font-bold text-[#181A2A] ">All Blog Post</div>
      <div className="w-full flex flex-col items-center gap-20">
        <BlogListing />
        <FooterHome />
      </div>
    </div>
  );
}
