import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

function Footer_section() {
  return (
    <div className="lg:!px-20 md:!px-20 !px-10 !py-10 lg:bg-white">
      <div className="lg:flex grid">
        <div className=" lg:flex md:flex grid grid-cols-1 sm:grid-cols-2 !gap-10  lg:flex-1/3 md:flex-1/3 sm:flex-1/2 flex-1 w-full lg:justify-evenly justify-around">
          <div className="">
            <div className="!mb-6">
              <h4 className="text-black text-[22px] font-medium capitalize ">
                Company
              </h4>
            </div>
            <div>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-[#000] text-[14px] font-medium uppercase "
                >
                  Home
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-[#000] text-[14px] font-medium uppercase"
                >
                  Services
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-[#000] text-[14px] font-medium uppercase"
                >
                  About us
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/ContactUs"
                  className="text-[#000] text-[14px] font-medium uppercase"
                >
                  Contact us
                </a>
              </h4>
            </div>
          </div>
          <div>
            <div className="!mb-6">
              <h4 className="text-black text-[22px] font-medium capitalize ">
                Support
              </h4>
            </div>
            <div>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-[#000] text-[14px] font-medium capitalize"
                >
                  Getting started
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-[#000] text-[14px] font-medium capitalize"
                >
                  Help center
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-[#000] text-[14px] font-medium capitalize"
                >
                  Report a bug
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a
                  href="/"
                  className="text-[#000] text-[14px] font-medium capitalize"
                >
                  Chat support
                </a>
              </h4>
            </div>
          </div>
          <div>
            <div className="!mb-6">
              <h4 className="text-black text-[22px] font-medium capitalize ">
                Contacts us
              </h4>
            </div>
            <div>
              <h4 className="!mb-3">
                {" "}
                <a href="/" className="text-[#000] text-[14px] font-medium ">
                  contact@company.com
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a href="/" className="text-[#000] text-[14px] font-medium ">
                  (414) 687 - 5892
                </a>
              </h4>
              <h4 className="!mb-3">
                {" "}
                <a href="/" className="text-[#000] text-[14px] font-medium ">
                  794 Mcallister St San Francisco, 94102
                </a>
              </h4>
            </div>
          </div>
        </div>
        <div className="place-content-end lg:!mt-0 !mt-10">
          <h4>Accrix</h4>
          <h4>
            Empowering the future of wealth through intelligent, high-return lending with data-driven credit assessment and active tracking.
          </h4>
          <div className="flex !mt-3 !gap-5">
            <div>
              <a href="/" target="_blank">
                <FaFacebookSquare size={30} color="#AD46FF" />
              </a>
            </div>
            <div>
              <a href="" target="_blank">
                <FaSquareInstagram size={30} color="#AD46FF" />
              </a>
            </div>
            <div>
              <a href="" target="_blank">
                <FaLinkedin size={30} color="#AD46FF" />
              </a>
            </div>
            <div>
              <a href="/">
                <FaSquareXTwitter size={30} color="#AD46FF" />
              </a>
            </div>
            <div>
              <a href="/">
                <FaSquareYoutube size={30} color="#AD46FF" />
              </a>
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
