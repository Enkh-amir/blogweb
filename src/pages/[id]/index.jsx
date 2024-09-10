import { FooterPage } from "@/components/footer/FooterPage";
import { Header } from "@/components/header/Header";
import { SinglePostPage } from "@/components/pages/SinglePost";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SinglePost = () => {
  const [article, setArticle] = useState([]);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center gap-[90px] ">
      <Header datas={article} />
      <SinglePostPage />
      <FooterPage />
    </div>
  );
};
export default SinglePost;
