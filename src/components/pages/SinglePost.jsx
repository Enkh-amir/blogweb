import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const SinglePostPage = () => {
  const [article, setArticle] = useState([]);
  const router = useRouter();

  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(router.query);

  return (
    <div className="w-[800px] flex flex-col gap-8 ">
      <div className="flex flex-col gap-5">
        <div className="text-[#181A2A] font-semibold text-4xl font-wsans ">{article.title} </div>
        <div className="flex justify-start gap-6">
          <div className="flex gap-5 text-[#696A75] font-wsans text-sm font-normal ">
            <img src="public\person.png" alt="" />
            <div>{article.name} </div>
          </div>
          <div className="text-[#696A75] font-wsans text-sm font-normal">
            August 20
          </div>
        </div>
      </div>
        <div><img className="rounded-xl" src={article.social_image} alt="" /></div>
      <div className="text-[#3B3C4A] text-xl font-normal font-wsans  ">{article.body_markdown}</div>
    </div>
  );
};
