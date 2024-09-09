export const TrendingCard = ({ bg, title, content }) => {
  return (
    <div
      className="bg-lightgray bg-cover bg-no-repeat w-72 h-80 rounded-xl hover:scale-105 transition-all ease-in-out flex flex-col justify-end gap-4 p-7"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-[#4B6BFB] px-[10px] w-max  rounded-md text-white text-sm font-medium py-1 ">
        {title}
      </div>
        <div className="text-white text-lg line-clamp-3 font-semibold">
          {content}
        </div>
    </div>
  );
};
