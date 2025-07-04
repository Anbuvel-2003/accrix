import React from "react";
import banner1 from "../../assets/bannerimage.png";
import backgroound from "../../assets/background1.png";
import star1 from "../../assets/star.png";
import title from "../../assets/Overlay.png";
import "./../../index.css";
import { FaPlay } from "react-icons/fa";

function Intropage() {
  return (
    // <div className="lg:!px-20 !py-10  md:!px-20 !px-10  lg:!mt-15 md:!mt-10 bg-white">
    //   <div className="lg:w-[95vw]  md:w-[90vw] lg:h-[90vh] md:h-[70vh] !h-fill  relative">
    //     <div>
    //       <h3 className="text-[18px]  py-3 px-5 rounded-[30px] text-center font-sans bg-clip-text bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] text-transparent">
    //         Fortune
    //       </h3>
    //       <h3 className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[20px] text-center !font-bold capitalize">
    //         Smarter lending ,
    //       </h3>
    //       <h3 className="lg:text-[50px] md:text-[50px] sm:text-[40px] text-[20px]  text-center !font-bold capitalize">
    //         {" "}
    //         unprecedented returns
    //       </h3>
    //     </div>
    //     <div className="lg:absolute md:absolute top-0 left-0 w-full lg:h-full md:h-[70vh] h-[100%] ">
    //       <img
    //         src={banner1}
    //         alt=""
    //         className="w-full h-full lg:object-contain md:object-scale-down object-cover "
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white relative place-items-center lg:pt-0 md:pt-0 sm:!pt-10 !pt-10">
      <div className="">
        <img
          src={star1}
          className="absolute lg:top-[30%] lg:left-[15%] sm:top[20%] sm:left-[10%] left-[15%] top-[15%] float lg:w-fit lg:h-fit md:w-fit md:h-fit sm:w-[12%] sm:h-[15%]  w-[35px] h-[50px]  "
          alt=""
        />
      </div>
      <div className="place-content-center w-full lg:h-[100vh] md:h-[80vh] sm:h-[50vh] h-[30vh] lg:absolute md:absolute place-items-center">
        {/* <img
          alt=""
          src={title}
          className="md:w-[20%] md:h-[15%] sm:w-[30%] sm:h-[20%] lg:w-[15%] lg:h-[10%] w-[25%]"
        /> */}
        <div className="md:!py-3 md:!px-5 lg:!py-1 lg:!px-5 sm:py-1 sm:!px-3 !px-2 !py-1 lg:rounded-[70px] bg-[#F1EBFE] rounded-[40px] place-content-center">
          <h3 className="lg:text-[30px] tracking-[5px] md:text-[20px] text-center sm:text-[25px] text-[16px] font-normal  text-transparent bg-clip-text bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD]">
            Accrix
          </h3>
        </div>

        <h3 className="lg:text-[60px] md:text-[40px] sm:text-[30px] text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD]">
          Your Gateway to
        </h3>
        <h3 className="lg:text-[60px] md:text-[40px] sm:text-[30px] text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD]">
          The Future of Finance
        </h3>
        <h3 className="lg:text-[20px] md:text-[18px] text-[12px] lg:w-full md:w-[70%] w-[70%] text-center sm:text-[16px] font-normal text-[#706666] lg:!mt-5 !mt-2">
          Smarter finance, powered by data and trust — helping you lend
          confidently and grow consistently with Accrix.
        </h3>
        <div className="flex bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] lg:!px-10 lg:!py-5 md:!px-6 md:!py-3 !px-3 !py-2   rounded-[40px] lg:!gap-5 gap-2 md:!gap-3 place-items-center !mt-5 lg:!mt-10 animate-pulse">
          <FaPlay color="White" size={15} />
          <h3 className="font-medium lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] text-white ">
            Watch demo
          </h3>
        </div>
      </div>
      <img
        src={backgroound}
        alt=""
        className=" floatss  place-content-center hidden md:block lg:block"
      />
    </div>
  );
}

export default Intropage;
