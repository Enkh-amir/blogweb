import { FooterHome } from "@/components/footer/FooterHome";
import { Header } from "@/components/header/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-between items-center flex-col">
      <Header />
      <div className="flex justify-center gap-[40px] items-center ">
        <div className="text-[#000] font-wsans text-7xl ">404</div>
        <div className="w-[1px] h-[156px] bg-[#E8E8EA] "></div>
        <div className="flex flex-col gap-5">
          <h2 className="text-[#000000] font-semibold text-2xl  ">
            Page Not Found
          </h2>
          <p className="text-[#696A75] font-normal text-lg font-wsans w-[392px] ">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <Link
            className="bg-[#4B6BFB] text-white rounded-md px-4 py-[10px] w-max text-sm font-medium font-wsans "
            href="/"
          >
            Back To Home
          </Link>
        </div>
      </div>
      <FooterHome />
    </div>
  );
}
