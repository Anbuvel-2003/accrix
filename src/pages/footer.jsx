import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";
import logo from "../assets/accrixlogo.png";

function Footer_section() {
  return (
    <div className="lg:!px-30 md:!px-20 !px-10 !py-10 bg-[#0D0D0D] lg:!mt-30 md:!mt-20 !mt-10">
      <div className="lg:flex grid">
        <div className="place-content-end lg:!mt-0 !mt-10 ">
          {/* <h4 className=" text-white text-[22px] font-medium capitalize">
            Accrix
          </h4> */}
           <img src={logo} alt="" className=" !mb-3" />
          <h4 className=" text-white text-[14px] font-light ">
            Empowering the future of finance through intelligent, high-return
            lending with data-driven credit assessment and active tracking.
          </h4>
          <div className="flex !mt-3 !gap-5 lg:!mb-0 md:!lg-15 !mb-10">
            <div>
              <a href="https://www.facebook.com/share/1AtHFijcAj/" target="_blank">
                <FaFacebookF size={30} color="#fff" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/accrix.in?igsh=dHAybzBybWc0YjJj" target="_blank">
                <FaInstagram size={30} color="#fff" />
              </a>
            </div>
            <div>
              <a href="/" target="_blank">
                <TbBrandLinkedin size={30} color="#fff" />
              </a>
            </div>
            {/* <div>
              <a href="/">
                <FaXTwitter size={30} color="#fff" />
              </a>
            </div>
            <div>
              <a href="/">
                <RiYoutubeLine size={30} color="#fff" />
              </a>
            </div> */}
          </div>
        </div>
        <div className=" lg:flex md:flex grid grid-cols-1 sm:grid-cols-2 !gap-10  lg:flex-1/3 md:flex-1/3 sm:flex-1/2 flex-1 w-full lg:justify-evenly justify-around">
          <div className="">
            <div className="!mb-6">
              <h4 className="text-white text-[22px] font-medium capitalize ">
                Company
              </h4>
            </div>
            <div>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-white text-[14px] font-light capitalize "
                >
                  Home
                </a>
              </h4>
              {/* <h4 className="!mb-3">
                {" "}
                <a
                  href="/Pricing"
                  className="text-white text-[14px] font-light capitalize"
                >
                  pricing
                </a>
              </h4> */}
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/AboutUs"
                  className="text-white text-[14px] font-light capitalize"
                >
                  About us
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/ContactUs"
                  className="text-white text-[14px] font-light capitalize"
                >
                  Contact us
                </a>
              </h4>
            </div>
          </div>
          {/* <div>
            <div className="!mb-6">
              <h4 className="text-white text-[22px] font-medium capitalize ">
                Support
              </h4>
            </div>
            <div>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-white text-[14px] font-light capitalize"
                >
                  Getting started
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-white text-[14px] font-light capitalize"
                >
                  Help center
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-white text-[14px] font-light capitalize"
                >
                  Report a bug
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-white text-[14px] font-light capitalize"
                >
                  Chat support
                </a>
              </h4>
            </div>
          </div> */}
          <div>
            <div className="!mb-6">
              <h4 className="text-white text-[22px] font-medium capitalize ">
                Contacts us
              </h4>
            </div>
            <div>
              <h4 className="!mb-3">
                {" "}
                <span className="text-white text-[14px] font-light ">
                  accrixfinz@gmail.com
                </span>
              </h4>
              <h4 className="!mb-3">
                {" "}
                 <span className="text-white text-[14px] font-light ">
                  9361515772
                </span>
              </h4>
              <h4 className="!mb-3">
                {" "}
                 <span href="/" className="text-white text-[14px] font-light ">
                  5/143, 1st Floor,
                  <br /> Krishnagiri to Salem Highways,
                  <br />
                  Near Nsk Landmark,
                  <br />
                  Krishnagiri-635001.
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[1px] w-[100%] bg-[#6e6e6e] !my-10"></div>
        <div className="lg:flex md:flex sm:flex  grid justify-between items-center">
          <div className="lg:mb-0 md:mb-0 sm:mb-0 !mb-5">
            <h4 className="text-[#6e6e6e] ">
              © 2025 <a href="/">Accrix.</a> All Rights Reserved.
            </h4>
          </div>
          <div className="lg:flex md:flex sm:flex flex items-center !gap-3">
            <div>
              <a
                href="/"
                className="text-[#6e6e6e] text-[14px] font-syne uppercase"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <span className="text-[#6e6e6e]">|</span>
            </div>
            <div>
              <a
                href="/"
                className="text-[#6e6e6e] text-[14px] font-syne uppercase"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_section;
