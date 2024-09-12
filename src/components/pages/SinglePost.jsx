import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const SinglePostPage = () => {
  const [article, setArticle] = useState([]);
  const router = useRouter();
  const [showData, setShowData] = useState(false);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
    setShowData(true);
  }, [router.query.id]);

  return (
    <div className="w-[800px] flex flex-col gap-8 ">
      <div className="flex flex-col gap-5">
        <div className="text-[#181A2A] font-semibold text-4xl font-wsans ">
          {article.title}{" "}
        </div>
        <div className="flex justify-start gap-6">
          <div className="flex gap-5 text-[#696A75] items-center font-wsans text-sm font-normal ">
            <img
              src={article.user?.profile_image_90}
              className="w-7 h-7 rounded-[50%] "
              alt=""
            />
            <div>{article.user?.name} </div>
          </div>
          <div className="text-[#696A75] flex items-center font-wsans text-sm font-normal">
            August 20
          </div>
        </div>
      </div>
      <div>
        <img className="rounded-xl" src={article.social_image} alt="" />
      </div>
      <div className="text-[#3B3C4A] text-xl font-normal font-wsans text-justify ">
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels. One of the most rewarding aspects of traveling is
        immersing yourself in the local culture and customs. This includes
        trying local cuisine, attending cultural events and festivals, and
        interacting with locals. Learning a few phrases in the local language
        can also go a long way in making connections and showing respect.
      </div>
      <div className="text-[#181A2A] font-semibold text-2xl font-wsans ">
        Research Your Destination
      </div>
      <div className="text-[#3B3C4A] text-xl font-normal font-wsans text-justify">
        Before embarking on your journey, take the time to research your
        destination. This includes understanding the local culture, customs, and
        laws, as well as identifying top attractions, restaurants, and
        accommodations. Doing so will help you navigate your destination with
        confidence and avoid any cultural faux pas. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus
        orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
        amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae.
        Viverra adipiscing at in tellus.
      </div>
      <div className="text-[#181A2A] font-semibold text-2xl font-wsans ">
        Plan Your Itinerary
      </div>
      <div className="text-[#3B3C4A] text-xl font-normal font-wsans text-justify">
        While it's essential to leave room for spontaneity and unexpected
        adventures, having a rough itinerary can help you make the most of your
        time and budget. Identify the must-see sights and experiences and
        prioritize them according to your interests and preferences. This will
        help you avoid overscheduling and ensure that you have time to relax and
        enjoy your journey. Vitae sapien pellentesque habitant morbi tristique.
        Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
        nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit
        amet.
      </div>
    </div>
  );
};
