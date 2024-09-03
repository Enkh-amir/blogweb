export const ContactUsPart = () => {
  return (
    <div className="w-[30%] flex flex-col gap-6 ">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="text-black font-wsans text-4xl font-semibold ">
            Contact Us
          </div>
          <div className="text-[#696A75] text-base font-normal text-justify ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </div>
        </div>
        <div className="flex gap-[50px] ">
          <div className="w-[50%] flex flex-col p-4 border-[1px] border-[#E8E8EA] rounded-xl gap-[10px] ">
            <h5 className="text-black font-wsans text-2xl font-semibold ">
              Address
            </h5>
            <p className="w-[160px] text-[#696A75] text-lg font-normal font-wsans ">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-[50%] flex flex-col p-4 border-[1px] border-[#E8E8EA] rounded-xl gap-[10px] ">
            <h5 className="text-black font-wsans text-2xl font-semibold ">
              Contact
            </h5>
            <p className="w-[160px] text-[#696A75] text-lg font-normal font-wsans ">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F6F6F7] pl-[35px] pr-[130px] py-[27px] rounded-[10px] gap-6 flex flex-col ">
        <div className="text-black font-wsans font-semibold text-lg ">Leave a Message</div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <input className="s-input w-[45%] px-3 py-1 " placeholder="Your Name" type="text" />
            <input className="s-input w-[45%] px-3 py-1 " placeholder="Your Email" type="text" />
          </div>
          <div>
            <input className="s-input w-full px-3 py-1" placeholder="Subject" type="text" />
          </div>
          <div>
            {/* <input
              className="s-input w-full text-base h-[134px] "
              placeholder="Write a message"
              type="text"

            /> */}
            <textarea name="" className="w-full rounded-md h-28 resize-none p-3" placeholder="Write a message" id=""></textarea>
          </div>
        </div>
        <button className="py-[10px] px-4 bg-[#4B6BFB] rounded-md w-max text-white font-wsans text-sm font-medium ">Send Message</button>
      </div>
    </div>
  );
};
