import { FooterHome } from "@/components/footer/FooterHome";
import { Header } from "@/components/header/Header";
import { SingleBlogPost } from "@/components/pages/SinglePost";

export default function SinglePost() {
  return (
    <div className="flex w-full justify-center">
      <Header />
      <SingleBlogPost />
      <FooterHome />
    </div>
  );
}
