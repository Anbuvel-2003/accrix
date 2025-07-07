import React, { useState } from "react";
import register from "../assets/register3.png";
import { FloatingLabel } from "flowbite-react";
import register2 from "../assets/register13.png";
import location from "../assets/locationicon.png";
import { useNavigate } from "react-router-dom"; 

export default function Register() {
  const [value, setValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    regCertNumber: "",
    financi: "",
    companyName: "",
    email: "",
    address: "",
    gstNumber: "",
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, "value", value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
navigate("/thankyou");
    console.log("Form Data Submitted: ", formData);
  };

  const labelBaseStyle =
    "[&>label]:text-purple-600 [&>label]:text-sm [&>label]:px-1.5 [&>label]:py-0.5";
  const labelFloatingBackground = "";
  const inputAppearanceClasses =
    "bg-white text-black border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 !p-2";

  return (
    <div>
      <div className="w-full mb-10">
        <img src={register} alt="Register Banner" className="object-contain" />
      </div>
      <div className="!p-10">
        <h3 className="text-[#9F70FD] text-[40px] text-center font-medium">
          Big ideas start small
        </h3>
        <h2 className="text-[20px] font-normal text-black text-center">
          Whether you’re exploring smarter ways or looking for clarity on your
          next financial step — we’re here. Our team is ready to turn your
          questions into confident action, and your ideas into real results.
        </h2>
      </div>
      <div className="lg:flex grid w-full !gap-20 ">
        <div className="lg:w-1/2 w-full">
          <div className=" max-auto rounded-3xl shadow-2xl lg:!ml-10 !m-10 bg-white !mt-20 !p-5  border-purple-200">
            <h2 className="text-3xl font-bold text-[#9F70FD] !pl-5 !pt-5">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="!gap-5 !p-5 ">
              {/* name */}
              <div className="relative w-full !mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-1  bg-[#F6F6F6] focus:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 !px-3 !py-3 pt-0 pb-2 placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-500 text-sm left-3 transition-all
               bg-white !px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:text-purple-500 peer-placeholder-shown:bg-[#F6F6F6]
               top-[-12px] text-[13px] "
                >
                  Name
                </label>
              </div>
              {/* mobile */}
              <div className="relative w-full !mt-6">
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  maxLength={10}
                  value={formData?.mobile}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-1  bg-[#F6F6F6] focus:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 !px-3 !py-3 pt-0 pb-2 placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-500 text-sm left-3 transition-all
               bg-white !px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:text-purple-500 peer-placeholder-shown:bg-[#F6F6F6]
               top-[-12px] text-[13px] "
                >
                  Mobile
                </label>
              </div>
              {/* regCertNumber  */}
              <div className="relative w-full !mt-6">
                <input
                  type="text"
                  id="regCertNumber"
                  name="regCertNumber"
                  value={formData?.regCertNumber}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-1  bg-[#F6F6F6] focus:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 !px-3 !py-3 pt-0 pb-2 placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-500 text-sm left-3 transition-all
               bg-white !px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:text-purple-500 peer-placeholder-shown:bg-[#F6F6F6]
               top-[-12px] text-[13px] "
                >
                  registered Certificate Number
                </label>
              </div>
              {/* financial */}
              <div className="relative w-full !mt-6">
                <input
                  type="text"
                  id="financi"
                  name="financi"
                  value={formData?.financi}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-1 bg-[#F6F6F6] focus:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 !px-3 !py-3 pt-0 pb-2 placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-500 text-sm left-3 transition-all
               bg-white !px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:text-purple-500 peer-placeholder-shown:bg-[#F6F6F6]
               top-[-12px] text-[13px] "
                >
                  financial
                </label>
              </div>
              {/* companyName */}
              <div className="relative w-full !mt-6">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData?.companyName}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-1  bg-[#F6F6F6] focus:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 !px-3 !py-3 pt-0 pb-2 placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-500 text-sm left-3 transition-all
               bg-white !px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:text-purple-500 peer-placeholder-shown:bg-[#F6F6F6]
               top-[-12px] text-[13px] "
                >
                  companyName
                </label>
              </div>
              {/* Email */}
              <div className="relative w-full !mt-6">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-1  bg-[#F6F6F6] focus:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 !px-3 !py-3 pt-0 pb-2 placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-500 text-sm left-3 transition-all
               bg-white !px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:text-purple-500 peer-placeholder-shown:bg-[#F6F6F6]
               top-[-12px] text-[13px] "
                >
                  Email
                </label>
              </div>
              {/* Address */}
              <div className="relative w-full !mt-6">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData?.address}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-1  bg-[#F6F6F6] focus:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 !px-3 !py-3 pt-0 pb-2 placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-500 text-sm left-3 transition-all
               bg-white !px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:text-purple-500 peer-placeholder-shown:bg-[#F6F6F6]
               top-[-12px] text-[13px] "
                >
                  Address
                </label>
              </div>
              {/* GST Number */}
              <div className="relative w-full !mt-6">
                <input
                  type="text"
                  id="gstNumber"
                  name="gstNumber"
                  value={formData?.gstNumber}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-1  bg-[#F6F6F6] focus:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 !px-3 !py-3 pt-0 pb-2 placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute text-gray-500 text-sm left-3 transition-all
               bg-white !px-1
               peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
               peer-focus:text-purple-500 peer-placeholder-shown:bg-[#F6F6F6]
               top-[-12px] text-[13px] "
                >
                  GST Number
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-[#9F70FD] hover:bg-purple-600 text-white text-[20px] !py-3 rounded-md font-semibold !mt-7 "
              >
                Enquire
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2 w-full place-items-center">
          <img src={register2} alt="" className="w-fit object-contain h-fit " />
          <div className="bg-white rounded-[20px]  shadow-2xl !p-5 !m-10 w-[80%]">
            <div className="flex !gap-5">
              <div className="bg-[#FDFBFF] flex w-full !p-2 place-items-center rounded-[10px]">
                <img src={location} alt="" className="" />
                <div className="!ml-5">
                  <h2 className="text-black text-[18px] font-medium">
                    location
                  </h2>
                  <h2 className="text-[14px] font-normal text-[#565656]">
                    jhkgjghjgh
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex !gap-5 !mt-4">
              <div className="bg-[#FDFBFF] flex w-full !p-2 place-items-center rounded-[10px]">
                <img src={location} alt="" className="" />
                <div className="!ml-5">
                  <h2 className="text-black text-[18px] font-medium">
                    Phone Number
                  </h2>
                  <h2 className="text-[14px] font-normal text-[#565656]">
                    jhkgjghjgh
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex !gap-5 !mt-4">
              <div className="bg-[#FDFBFF] flex w-full !p-2 place-items-center rounded-[10px]">
                <img src={location} alt="" className="" />
                <div className="!ml-5">
                  <h2 className="text-black text-[18px] font-medium">E-mail</h2>
                  <h2 className="text-[14px] font-normal text-[#565656]">
                    jhkgjghjgh
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
