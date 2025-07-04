import React, { useState, useEffect, useRef } from "react";
import { CiMobile3, CiSettings } from "react-icons/ci";
import { LuBrainCircuit, LuCloudCog, LuMonitorCog } from "react-icons/lu";
import { FaPencilRuler } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbBrandSpeedtest } from "react-icons/tb";
import logo from "../assets/accrixlogo.png";

// Dropdown component for better organization
const DropdownMenu = ({ items, isOpen, isHorizontal = false }) => {
  return (
    <div
      className={`absolute top-full left-1/2  transform -translate-x-1/2
      mt-6 !py-6 bg-white hover:shadow-3xl flex backdrop-blur-sm shadow-lg rounded-md z-50 transition-all duration-300 ease-in-out
       ${
         isOpen
           ? "opacity-100 translate-y-0"
           : "opacity-0 -translate-y-2 pointer-events-none"
       }
      `}
    >
      <div className={`${isHorizontal ? "grid justify-between !px-12" : ""}`}>
        {items.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`relative ${
                isHorizontal
                  ? "flex flex-col items-start w-1/2"
                  : "flex flex-wrap"
              }`}
            >
              <div className="bg-transparent !px-2 !py-2  rounded-lg  transition-all duration-300 group ">
                <div className="flex justify-center items-center !gap-2">
                  {item?.id == 1 ? (
                    <div
                      className={`flex justify-center items-center transition-all duration-300 
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       !p-3 rounded-full`}
                    >
                      <CiSettings size={30} style={{ color: "white" }} />
                    </div>
                  ) : item?.id == 2 ? (
                    <div
                      className={`flex justify-center items-center transition-all duration-300 
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       !p-3 rounded-full`}
                    >
                      <LuCloudCog size={30} style={{ color: "white" }} />
                    </div>
                  ) : item?.id == 3 ? (
                    <div
                      className={`flex justify-center items-center transition-all duration-300 
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       !p-3 rounded-full`}
                    >
                      <CiMobile3 size={30} style={{ color: "white" }} />
                    </div>
                  ) : item?.id == 4 ? (
                    <div
                      className={`flex justify-center items-center transition-all duration-300 
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       !p-3 rounded-full`}
                    >
                      <LuMonitorCog size={30} style={{ color: "white" }} />
                    </div>
                  ) : item?.id == 5 ? (
                    <div
                      className={`flex justify-center items-center transition-all duration-300 
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       !p-3 rounded-full`}
                    >
                      <AiOutlineShoppingCart
                        size={30}
                        style={{ color: "white" }}
                      />
                    </div>
                  ) : item?.id == 6 ? (
                    <div
                      className={`flex justify-center items-center transition-all duration-300 
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       !p-3 rounded-full`}
                    >
                      <FaPencilRuler size={30} style={{ color: "white" }} />
                    </div>
                  ) : item?.id == 7 ? (
                    <div
                      className={`flex justify-center items-center transition-all duration-300 
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       !p-3 rounded-full`}
                    >
                      <LuBrainCircuit size={30} style={{ color: "white" }} />
                    </div>
                  ) : (
                    <div
                      className={`flex justify-center items-center transition-all duration-300 
                       bg-gradient-to-r from-indigo-500 to-cyan-400
                       !p-3 rounded-full`}
                    >
                      <TbBrandSpeedtest size={30} style={{ color: "white" }} />
                    </div>
                  )}

                  <div>
                    <a
                      href={item.path}
                      className={`${
                        isHorizontal
                          ? "px-4 whitespace-nowrap"
                          : "block px-6 !py-3 mb-2"
                      } uppercase text-sm font-syne tracking-wide text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-400 group-hover:bg-clip-text duration-200 text-center`}
                    >
                      {item.title}
                    </a>
                    {/* <p className="text-[12px] text-black font-syne">
                      {item?.description}
                    </p> */}
                  </div>
                </div>
              </div>
              {/* {item.subItems && (
                <div className="mt-6 flex flex-col items-center bg-transparent backdrop-blur-sm rounded-md !py-4">
                  {item.subItems.map((subItem, subIdx) => (
                    <a
                      key={subIdx}
                      href={subItem.path}
                      className="block px-6 !py-2 mb-2 text-sm text-black hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text transition-colors duration-200 uppercase font-medium tracking-wide text-center"
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Handle scroll effect to hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (index) => {
    if (activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  // Navigation links with dropdowns
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About us",
      path: "/Aboutus",
    },
    { title: "services", path: "/services" },
    { title: "contact Us", path: "/ContactUs" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" hidden  px-4 lg:flex  justify-between">
        <div className="place-self-center !pl-10 !mt-5">
          <img src={logo} alt="" className="" />
        </div>
        <div className="w-full place-content-end flex">
          <div className="w-1/2 bg-[#f0e9f8] flex justify-evenly !mt-5 !px-5 !py-3 rounded-[15px]">
            <h2 className="text-[#263030] hover:text-[#9F70FD] cursor-pointer capitalize font-sans text-[16px]">
              <a href={"/"}>Home</a>
            </h2>
            <h2 className="text-[#263030] hover:text-[#9F70FD] cursor-pointer capitalize font-sans text-[16px]">
              <a href={"/AboutUs"}>About us</a>
            </h2>
            <h2 className="text-[#263030] hover:text-[#9F70FD] cursor-pointer capitalize font-sans text-[16px]">
              <a href={"/"}>services</a>
            </h2>
            <h2 className="text-[#263030] hover:text-[#9F70FD] cursor-pointer capitalize font-sans text-[16px]">
              <a href={"/ContactUs"}>contact us</a>
            </h2>
          </div>
        </div>
        <div className="w-[40vw] place-content-end place-items-end flex !mr-30">
          <div className="flex  cursor-pointer justify-center h-[80%] !px-5 !py-3 items-center bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] w-[150px] rounded-[40px]">
            <a href="/Register">
              <h1 className="text-[#fff] capitalize   font-sans text-[16px]">
                Get Started
              </h1>
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-end !my-3 !mr-5 ">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white rounded-b-lg shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <div key={index}>
                <div className="flex justify-between items-center w-full">
                  <a
                    href={link.path}
                    className="block !px-3 !py-2 text-[16px]  font-syne text-black w-full"
                    onClick={() => toggleDropdown(index)}
                  >
                    {link.title}
                  </a>
                  {link.dropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="!px-3 !py-2 transition-transform duration-200"
                      aria-expanded={activeDropdown === index}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown - Accordion style */}
                {link.dropdown && (
                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeDropdown === index
                        ? "max-h-64 opacity-100"
                        : activeDropdown == null
                        ? "max-h-0 opacity-0"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.dropdown.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.path}
                        className="block !px-3 !py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
