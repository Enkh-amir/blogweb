import { FooterHome } from "@/components/footer/FooterHome";
import { Header } from "@/components/header/Header";
import { SinglePostPage } from "@/components/pages/SinglePost";
import { useRouter } from "next/router";
import { useState } from "react";

const SinglePost = () => {
  return (
    <div className="flex flex-col items-center gap-[90px] ">
      <Header />
      <SinglePostPage />
      <FooterHome />
    </div>
  );
};
export default SinglePost;
