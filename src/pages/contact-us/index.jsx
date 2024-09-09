import { FooterPage } from "@/components/footer/FooterPage";
import { Header } from "@/components/header/Header";
import { ContactUsPart } from "@/components/pages/ContactUs";
import { useEffect, useState } from "react";

export default function ContactUs() {
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
    <div className="w-full flex flex-col items-center gap-[100px] ">
      <Header datas={article} />
      <div className="flex justify-center items-center w-full">
        <ContactUsPart />
      </div>
      <FooterPage />
    </div>
  );
}
