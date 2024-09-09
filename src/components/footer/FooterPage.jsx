import { Facebook } from "../../../public/svg/FacebookSvg";
import { Instagram } from "../../../public/svg/InstagramSvg";
import { LinkedIn } from "../../../public/svg/LinkedinSvg";
import { SmallIcon } from "../../../public/svg/SmallIcon";
import { Twitter } from "../../../public/svg/TwitterSvg";
import Link from "next/link";
export const FooterPage = () => {
  return (
    <div className="w-full py-16 flex gap-6 flex-col items-center bg-[#F6F6F7]">
      <div className="w-[1216px] flex justify-between">
        <div className="w-[25%] flex gap-6  flex-col">
          <div className="flex flex-col gap-3">
            <div className="text-[#181A2A] text-lg font-wsans font-semibold ">
              About
            </div>
            <div className="text-[#696A75] font-wsans text-base font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
          <div className="flex flex-col text-[#3B3C4A] text-base font-wsans font-normal">
            <div className="">Email : jijkenamar@gmail.com</div>
            <div>Phone : 976 91402449</div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center gap-2 text-[#3B3C4A] font-wsans font-normal text-base ">
          <Link href="/">
            <button className="footer-butt">Home</button>
          </Link>
          <Link href="/blog-list">
            <button className="footer-butt">Blog</button>
          </Link>
          <Link href="/contact-us">
            <button className="footer-butt">Contact</button>
          </Link>
        </div>
        <div className="w-[25%] gap-6 flex justify-center">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div className="w-[1216px] flex justify-between border-t border-[#E8E8EA] p-5 ">
        <div className="flex gap-2">
          <div>
            <SmallIcon />
          </div>
          <div className="flex flex-col text-[#3B3C4A] font-wsans font-normal text-base ">
            <div>MetaBlog</div>
            <div>© All Rights Reserved.</div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <div>Terms of Use</div>
          <div className="w-[1px] h-6 bg-[#E8E8EA] "></div>
          <div>Privacy Policy</div>
          <div className="w-[1px] h-6 bg-[#E8E8EA] "></div>
          <div>Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};
