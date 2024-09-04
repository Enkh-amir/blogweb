import { Facebook } from "../../../public/svg/FacebookSvg";
import { Instagram } from "../../../public/svg/InstagramSvg";
import { LinkedIn } from "../../../public/svg/LinkedinSvg";
import { Twitter } from "../../../public/svg/TwitterSvg";

export const FooterHome = () => {
  return (
    <div className="w-[100%] py-16 flex gap-6 flex-col items-center bg-[#F6F6F7]">
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
          <button>Home</button>
          <button>Blog</button>
          <button>Contact</button>
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
            <svg    
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
            >
              <path
                d="M24 48.5C37.2548 48.5 48 37.7548 48 24.5C48 11.2452 37.2548 0.5 24 0.5C10.7452 0.5 0 11.2452 0 24.5C0 30.036 1.87437 35.1342 5.0231 39.1946L10.314 19.2066C12.5156 10.5312 18.2343 6.043 27.4155 6.043H30.5814C37.038 6.043 41.78 12.1041 40.2264 18.371C39.9478 19.495 39.427 20.5446 38.7004 21.4463L36.006 24.7898C35.3146 25.6478 35.0625 26.779 35.3239 27.8494L36.1453 31.2118C36.5704 32.9521 36.4927 34.7773 35.9213 36.4752C33.9775 42.251 28.5636 46.1413 22.4695 46.1413H13.6115C16.755 47.653 20.2786 48.5 24 48.5Z"
                fill="#141624"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.6 29.5123H18.9242C17.4329 29.5123 16.1291 30.518 15.7505 31.9604L13.9165 38.9472H21.1614C23.8415 38.9472 26.1845 37.1398 26.865 34.5476L27.0222 33.9487C27.611 31.7057 25.919 29.5123 23.6 29.5123ZM22.2195 31.6351H19.6787C18.8274 31.6351 18.083 32.2086 17.8658 33.0317L16.8649 36.8243H20.871C22.353 36.8243 23.6486 35.8303 24.0248 34.4045L24.1118 34.0752C24.4373 32.8415 23.5017 31.6351 22.2195 31.6351Z"
                fill="#141624"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9962 16.157C20.3748 14.7145 21.6786 13.7088 23.1699 13.7088H27.8457C30.1647 13.7088 31.8566 15.9023 31.2679 18.1452L31.1107 18.7441C30.4302 21.3364 28.0872 23.1437 25.4071 23.1437H18.1622L19.9962 16.157ZM22.1115 17.2282C22.3287 16.4052 23.0731 15.8317 23.9244 15.8317H26.4652C27.7474 15.8317 28.683 17.0381 28.3575 18.2717L28.2705 18.6011C27.8943 20.0268 26.5987 21.0209 25.1167 21.0209H21.1106L22.1115 17.2282Z"
                fill="#141624"
              />
            </svg>
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
