import React from "react";
import aboutus from "../assets/aboutus2.png";
import Support from "../assets/support.png";
import Business from "../assets/busniess.png";
import Financial from "../assets/financial.png";
import Icons1 from "../assets/Icons.png";
import Icons2 from "../assets/Vector (1).png";
import Icons3 from "../assets/Vector.png";
import aboutus1 from "../assets/aboutus1.png";
import aboutus3 from "../assets/aboutus3.png";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.jpeg";
import team5 from "../assets/team01.jpeg";
import team6 from "../assets/team02.jpeg";
import team7 from "../assets/team03.jpeg";
import team8 from "../assets/team04.jpeg";
import { FaCheck } from "react-icons/fa6";

function Aboutus() {
  const field = [
    {
      id: 1,
      content: "Precision-led lending, backed by real data",
    },
    {
      id: 2,
      content: "Curated investment plans for every goal",
    },
    {
      id: 3,
      content: "Active monitoring with repayment follow-ups",
    },
    {
      id: 4,
      content: "Advanced credit evaluation and borrower profiling",
    },
    {
      id: 5,
      content: "Scalable platform for long-term wealth creation",
    },
  ];
  return (
    <div className="">
      <div className="w-full !mb-10">
        <img src={aboutus} alt="" className="object-contain w-full" />
      </div>
      {/* section 1 */}
      <div className="lg:!m-30 md:!m-20 !m-10  grid lg:grid-cols-3 grid-cols-1  !gap-10 lg:!gap-5">
        <div className="place-items-center">
          <img src={Support} alt="" className="" />
          <h3 className="text-[#383838] lg:text-[20px] md:text-[20px] sm:text-[18] text-[16px] lg:!py-5">
            Great Support
          </h3>
          <p className="text-[#7A7A7A] lg:text-[16px] md:text-[14px] text-[12px] text-center lg:w-[60%] ">
            Our dedicated team is always ready to assist— resolving queries,
            following up payments, and ensuring smooth lending
          </p>
        </div>
        <div className=" place-items-center">
          <img src={Business} alt="" className="" />
          <h3 className="text-[#383838] lg:text-[20px] md:text-[20px] sm:text-[18] text-[16px] lg:!py-5">
            Growing Your Business
          </h3>
          <p className="text-[#7A7A7A] lg:text-[16px] md:text-[14px] text-[12px] text-center lg:w-[60%]">
            Boost your financial growth with curated lending solutions tailored
            to scale your business efficiently and securely
          </p>
        </div>
        <div className=" place-items-center ">
          <img src={Financial} alt="" className="" />
          <h3 className="text-[#383838] lg:text-[20px] md:text-[20px] sm:text-[18] text-[16px] lg:!py-5">
            Smart Financial Control
          </h3>
          <p className="text-[#7A7A7A] lg:text-[16px] md:text-[14px] text-[12px] text-center lg:w-[60%]">
            Gain full visibility, track repayments, and make data- driven
            decisions with complete control over your investment portfolio
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className="lg:!m-30 md:!m-20 !m-10 w-fit lg:flex grid !gap-10 ">
        <div className="lg:w-1/2 w-full">
          <img
            src={aboutus1}
            alt=""
            className="w-full h-full object-contain rounded-[10px]"
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            }}
          />
        </div>
        <div className="lg:w-1/2 w-full place-content-center lg:!pl-20 !pl-0">
          <div className="flex !gap-5 !mb-6 place-items-start">
            <div className=" !pt-2">
              <img
                src={Icons3}
                alt=""
                className="lg:w-full lg:h-full w-[40px] h-[40px] object-contain"
              />
            </div>
            <div className="">
              <div>
                <h3 className="text-[#AD46FF] lg:text-[24px] md:text-[20px] sm:text-[20px] text-[18px] font-medium ">
                  Real-Time Payment Tracking
                </h3>
              </div>
              <div>
                <h3 className="text-[#7A7A7A] lg:text-[14px] md:text-[14px] text-[12px] font-medium">
                  Track delayed payments with full visibility into borrower
                  activity Our team actively follows up with calls, emails, and
                  reminders
                </h3>
              </div>
            </div>
          </div>
          <div className="flex !gap-5 !mb-6 ">
            <div className=" !pt-2">
              <img
                src={Icons2}
                alt=""
                className="lg:w-full lg:h-full w-[40px] h-[40px] object-contain"
              />
            </div>
            <div className="">
              <h3 className="text-[#AD46FF] lg:text-[24px] md:text-[20px] sm:text-[20px] text-[18px] font-medium ">
                End-to-End Security
              </h3>
              <h3 className="text-[#7A7A7A] lg:text-[14px] md:text-[14px] text-[12px] font-medium">
                Your data and investments are protected with enterprise-grade
                encryption.Trust and transparency are at the core of every
                transaction
              </h3>
            </div>
          </div>
          <div className="flex !gap-5  !mb-6">
            <div className=" !pt-2">
              <img
                src={Icons1}
                alt=""
                className="lg:w-full lg:h-full w-[40px] h-[40px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-[#AD46FF] lg:text-[24px] md:text-[20px] sm:text-[20px] text-[18px] font-medium ">
                Data-Driven Support
              </h3>
              <h3 className="text-[#7A7A7A] lg:text-[14px] md:text-[14px] text-[12px] font-medium">
                We use advanced analytics to monitor lending, borrowing, and
                repayments—enabling smarter decisions, proactive support, and
                reduced risk
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="lg:!m-30 md:!m-20 !m-10 lg:w-[88vw] w-[80%] lg:flex grid  ">
        <div className="lg:w-1/2 place-content-center w-full lg:!pr-20 !pr-0">
          <div>
            <div>
              <h3 className="text-[#AD46FF] lg:text-[30px] md:text-[25px] text-[20px] ">
                We are an expert in this field
              </h3>
            </div>
            <div className=" !mt-10">
              {field?.map((item, index) => {
                return (
                  <div key={item} className="flex !gap-5 !mb-7">
                    <FaCheck size={20} color="#000" />
                    <h4 className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px text-[#000] font-medium">
                      {item?.content}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full ">
          <img
            src={aboutus3}
            alt=""
            className="w-full h-full object-contain rounded-[10px]"
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            }}
          />
        </div>
      </div>

      {/* Our Team */}
      <div className="lg:!m-30 md:!m-20 !m-10">
        <h3 className="text-[#000] font-semibold text-center lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px]">
          Our Team
        </h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 !gap-10 lg:w-[88vw] w-full !mt-10 justify-between">
          <div
            className="cursor-pointer  w-full h-[80%] group "
            style={{
              boxShadow: "0px 0px 30px rgba(28, 28, 28, 0.07)",
            }}
          >
            <div className="relative w-full h-[80%] overflow-hidden">
              <img
                src={team5}
                alt=""
                className="w-full h-full object-contain transform transition-all duration-500 group-hover:scale-110 "
              />
            </div>
            <div className="!p-10">
              <h3 className="text-[#9F70FD] lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px font-medium">
                Vineeth Sharma Murali
              </h3>
              <h3 className="text-[#888888] lg:text=[16px] md:text-[16px] text-[14px] font-normal">
                Chief Executive Officer
              </h3>
            </div>
          </div>

          <div
            className="cursor-pointer  w-full h-[80%] group"
            style={{
              boxShadow: "0px 0px 30px rgba(28, 28, 28, 0.07)",
            }}
          >
            <div className="relative w-full h-[80%] overflow-hidden">
              <img
                src={team6}
                alt=""
                className="w-full h-full object-contain transform transition-all duration-500 group-hover:scale-110 "
              />
            </div>
            <div className="!p-10">
              <h3 className="text-[#9F70FD] lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px font-medium">
                Gokulakrishnan
              </h3>
              <h3 className="text-[#888888] lg:text=[16px] md:text-[16px] text-[14px] font-normal">
                Chief Technology Officer
              </h3>
            </div>
          </div>
          <div
            className="cursor-pointer  w-full h-[80%] group"
            style={{
              boxShadow: "0px 0px 30px rgba(28, 28, 28, 0.07)",
            }}
          >
            <div className="relative w-full h-[80%] overflow-hidden">
              <img
                src={team7}
                alt=""
                className="w-full h-full object-contain transform transition-all duration-500 group-hover:scale-110 "
              />
            </div>
            <div className="!p-10">
              <h3 className="text-[#9F70FD] lg:text-[20px] md:text-[18px] sm:text-[16px] text-14px font-medium">
                Anbuvel
              </h3>
              <h3 className="text-[#888888] lg:text=[16px] md:text-[16px] text-[14px] font-normal">
                Software Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
