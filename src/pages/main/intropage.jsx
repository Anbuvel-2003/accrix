import React from "react";
import banner1 from "../../assets/bannerimage.png";

function Intropage() {
  return (
    <div className="lg:!px-20 !py-10  md:!px-20 !px-10  lg:!mt-15 md:!mt-10 bg-white">
      <div className="lg:w-[95vw]  md:w-[90vw] lg:h-[90vh] md:h-[70vh] !h-fill  relative">
        <div>
          <h3 className="text-[18px]  py-3 px-5 rounded-[30px] text-center font-sans bg-clip-text bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] text-transparent">
            Fortune
          </h3>
          <h3 className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[20px] text-center !font-bold capitalize">
            Smarter lending ,
          </h3>
          <h3 className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[20px]  text-center !font-bold capitalize">
            {" "}
            unprecedented returns
          </h3>
        </div>
        <div className="lg:absolute md:absolute top-0 left-0 w-full lg:h-full md:h-[70vh] h-[100%] ">
          <img
            src={banner1}
            alt=""
            className="w-full h-full lg:object-contain md:object-scale-down object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default Intropage;
