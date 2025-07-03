import React, { useEffect, useState } from "react";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile1.jpg";
import profile5 from "../../assets/profile5.jpg";
import Stay1 from "../../assets/Stay1.png";
import Stay2 from "../../assets/Stay2.png";
import Stay3 from "../../assets/Stay3.png";
import money1 from "../../assets/money1.png";
import money2 from "../../assets/money2.png";
import money3 from "../../assets/money3.png";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import services4 from "../../assets/services4.png";
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Rate } from "antd";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import Intropage from "./intropage";

function Main() {
  const testimonail = [
    {
      id: 1,
      imageurl: profile1,
      rating: 4,
      comment: ` "Accrix has significantly streamlined our lending operations."
 The platform’s automation features have reduced manual errors and helped us maintain consistency in follow-ups. It’s an essential tool for anyone managing large-scale lending.`,
      name: "Anbu S., ",
      occupation: "Tirupur",
    },
    {
      id: 2,
      imageurl: profile2,
      rating: 5,
      comment: ` "We’ve experienced improved repayment efficiency since adopting Accrix."
 The notification system ensures timely reminders, and the analytics offer valuable insights into borrower behavior. It’s both intuitive and powerful.`,
      name: "Sujith S.,",
      occupation: "coimbatore",
    },
    {
      id: 3,
      imageurl: profile3,
      rating: 3,
      comment: ` "Accrix brings structure and clarity to what was once a complex process."
 Managing multiple accounts is now seamless. The dashboard is well-designed and enables our team to stay informed and proactive.`,
      name: "Guhan K S .,",
      occupation: "Salem",
    },
    {
      id: 4,
      imageurl: profile2,
      rating: 2,
      comment: ` "The platform has enhanced both visibility and control across our portfolio."
 We’ve been able to scale without compromising accuracy or speed. The support team is also prompt and knowledgeable.`,
      name: "Vijay R.,",
      occupation: "Chennai",
    },
    {
      id: 5,
      imageurl: profile3,
      rating: 5,
      comment: `"Accrix has added a layer of professionalism to our financial operations."
 From secure data management to real-time tracking, every feature supports better decision-making and accountability.`,
      name: "Kiran S.,",
      occupation: "Bengaluru",
    },
  ];
  const accodion = [
    {
      id: 1,
      title: "How does Accrix help with repayment tracking?",
      answer:
        "Our platform provides real-time repayment tracking, complete borrower activity logs, and automated SMS/email reminders to ensure timely collections and reduce default risks.",
    },
    {
      id: 2,
      title: "Is my financial data secure on Accrix?",
      answer:
        "Yes, we prioritize data security with enterprise-grade encryption and privacy protocols. All transactions and records are securely stored and protected against unauthorized access. ",
    },
    {
      id: 3,
      title: "Can I manage multiple borrowers and loans at once?",
      answer:
        "Absolutely. Accrix is built to handle high volumes of lending activity, offering scalable solutions that allow you to manage multiple borrowers, loans, and repayment plans from a single dashboard.",
    },
    {
      id: 4,
      title: "What kind of support does Accrix offer?",
      answer:
        "We provide personalized support through a dedicated team that assists with onboarding, technical queries, and portfolio management. Our goal is to ensure a smooth and productive user experience at all times.",
    },
    {
      id: 5,
      title: "Is there a trial period or demo available before subscribing?",
      answer:
        "Yes, we offer a product demo on request to help you understand how Accrix fits your needs. Please contact our team to schedule a personalized walkthrough.",
    },
  ];
  const [selected, setSelected] = useState(testimonail[0]);
  const [selectedaccordion, setSelectedaccordion] = useState(accodion[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [selected]);
  const handleNext = () => {
    const currentIndex = testimonail.findIndex(
      (item) => item.id === selected.id
    );
    if (currentIndex == 4) {
      setSelected(testimonail[0]);
    } else {
      setSelected(testimonail[currentIndex + 1]);
    }
  };
  const handlePrev = () => {
    const currentIndex = testimonail.findIndex(
      (item) => item.id === selected.id
    );
    if (currentIndex == 0) {
      setSelected(testimonail[4]);
    } else {
      setSelected(testimonail[currentIndex - 1]);
    }
  };
  return (
    <div>
      <Intropage />

      {/* section 1 */}
      <section className="lg:!px-30 md:!px-20 !px-10 !py-10 lg:!mt-30 bg-white">
        <div>
          <h1 className="lg:text-[45px] md:text-[30px] sm:text-[20px] text-[20px] capitalize text-center text-black font-semibold">
            Money that Moves Systems that Scale.
          </h1>
          <div className=" justify-between items-center ">
            <p className="md:text-[20px] sm:text-[16px] text-[12px] text-center  text-black capitalize font-sans">
              Track every rupee, automate every follow-up, and stay steps ahead.
              We strip away the complexity of money management
            </p>
            <p className="md:text-[20px] sm:text-[16px] text-[12px] text-center  text-black capitalize font-sans">
              with easy-to-use tools and clear insights.
            </p>
            {/* <button className="!px-10 !py-5 rounded-[40px] cursor-pointer text-white bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD]">Get started free</button> */}
          </div>
          <div className="!mt-15">
            <div className="w-full lg:flex grid ">
              <div className="w-full h-full grid ">
                <div className="lg:flex grid grid-cols-2 gap-5 h-1/2  ">
                  <div className="">
                    <img src={money1} alt="" className="rounded-[20px]" />
                  </div>
                  <div className="">
                    <img src={money2} className="rounded-[20px]" alt="" />
                  </div>
                </div>
                <div className="!mt-5 w-full h-fill md:rounded-[20px] sm:rounded-[15px] rounded-[10px] bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] lg:!px-10 md:!px-5 !px-3">
                  <div className="flex gap-5 lg:!py-5 md:!py-3 !py-2">
                    <div className="w-1/3 ">
                      <h5 className="lg:text-[90px] md:text-[50px] sm:text-[30px] text-[18px] text-white font-bold text-center">
                        1.5M
                      </h5>
                      <h5 className="md:text-[20px] sm:text-[16px] text-[12px]  text-white capitalize font-sans text-center">
                        Active users
                      </h5>
                    </div>
                    <div className=" w-1/3">
                      <h5 className="lg:text-[90px] md:text-[50px] sm:text-[30px] text-[18px] text-white font-bold text-center">
                        46+
                      </h5>
                      <h5 className="md:text-[20px] sm:text-[16px] text-[12px]  text-white capitalize font-sans text-center">
                        Country
                      </h5>
                    </div>
                    <div className=" w-1/3">
                      <h5 className="lg:text-[90px] md:text-[50px] sm:text-[30px] text-[18px] text-white font-bold text-center">
                        140+
                      </h5>
                      <h5 className="md:text-[20px] sm:text-[16px] text-[12px]  text-white capitalize font-sans text-center">
                        startups
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 md:w-full lg:mt-0 !mt-5 lg:!ml-5 !ml-0 h-[full]">
                <div className="w-full h-full ">
                  <img
                    src={money3}
                    className="lg:w-[50vw] lg:h-[90vh] object-contain rounded-[20px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-[#0D0D0D] !py-10 lg:!pt-20 md:!px-30 !px-10 !my-30">
        <div className="!pb-10">
          <h3 className="text-white lg:text-[50px] md:text-[50px] sm:text-[25px] text-center text-[20px] capitalize font-bold ">
            Services
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 !gap-5 !pb-20">
          <div className="bg-[#F9F6FF] place-items-center rounded-[20px] lg:!px-10 lg:!py-15 md:!px-10 md:!py-15 !px-5 !py-10">
            <img src={services1} alt="" className="!mb-5" />
            <h2 className="text-black text-[16px] font-semibold !mb-5 text-center  ">
              Data Analysis for Support
            </h2>
            <h2 className="text-[14px] font-normal text-black text-center text-sm/8 ">
              Advanced analytics track borrower behavior and repayments,
              enabling smarter decisions and proactive lending support
            </h2>
          </div>
          <div className="bg-[#F9F6FF] place-items-center rounded-[20px] lg:!px-10 lg:!py-15 md:!px-10 md:!py-15 !px-5 !py-10">
            <img src={services2} alt="" className="!mb-5" />
            <h2 className="text-black text-[16px] font-semibold !mb-5 text-center  ">
              Transaction Security
            </h2>
            <h2 className="text-[14px] font-normal text-black text-center text-sm/8 ">
              Enterprise-grade encryption and layered authentication ensure your
              data and transactions remain secure and fully compliant
            </h2>
          </div>
          <div className="bg-[#F9F6FF] place-items-center rounded-[20px] lg:!px-10 lg:!py-15 md:!px-10 md:!py-15 !px-5 !py-10">
            <img src={services3} alt="" className="!mb-5" />
            <h2 className="text-black text-[16px] font-semibold !mb-5  text-center ">
              Payment Reminders and Follow-Ups
            </h2>
            <h2 className="text-[14px] font-normal text-black text-center text-sm/8 ">
              Automated alerts and active follow-ups ensure timely repayments,
              reducing defaults and maintaining a smooth cash flow
            </h2>
          </div>
          <div className="bg-[#F9F6FF] place-items-center rounded-[20px] lg:!px-10 lg:!py-15 md:!px-10 md:!py-15 !px-5 !py-10">
            <img src={services4} alt="" className="!mb-5" />
            <h2 className="text-black text-[16px] font-semibold !mb-5 text-center  ">
              Payment Handling & Support
            </h2>
            <h2 className="text-[14px] font-normal text-black text-center text-sm/8 ">
              Timely follow-ups and responsive support help manage late payments
              while preserving borrower trust and lender confidence
            </h2>
          </div>
        </div>
      </section>
      {/* section 3 */}
      <section className="lg:!px-30 md:!px-20 !px-10 !py-10 lg:!mt-30 bg-white">
        <div>
          <h3 className="lg:text-[45px] md:text-[30px] sm:text-[20px] text-[20px] capitalize text-black font-semibold text-center">
            Stay in Control of Your Finances
          </h3>
          <h2 className="md:text-[20px] sm:text-[18px] text-[16px]  text-black font-sans text-center">
            Simplify your financial workflow with powerful tools designed tools
            designed to save you time and keep <br /> your business running
            smoothly
          </h2>
          <div className="w-full flex !gap-10 lg:!mt-20 !mt-5 sm:!mt-10">
            <div className="w-1/2">
              <img
                src={Stay1}
                alt=""
                className="w-full h-[90%] object-contain  rounded-[20px]"
              />
            </div>
            <div className="w-1/2">
              <img
                src={Stay2}
                alt=""
                className="w-full h-[90%] object-contain  rounded-[20px]"
              />
            </div>
          </div>
          <div className="w-full h-fill lg:flex  grid !gap-10 bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] rounded-[20px] lg:!p-15 ">
            <div className="w-full place-content-center lg:!mt-0 md:!mt-0 !mt-10 !p-5">
              <h2 className="lg:text-[45px] md:text-[30px] sm:text-[20px] text-[20px] capitalize text-white font-semibold text-left">
                Smart Analytics & Reporting
              </h2>
              <h2 className="md:text-[20px] sm:text-[18px] text-[16px]  text-white font-sans text-left">
                Smart analytics and reporting in finance utilize advanced data
                analysis to transform financial data into actionable insights.
                This enhances decision-making, optimizes resource allocation,
                and improves overall financial performance for organizations.
              </h2>
            </div>
            <div className="w-[60vw] lg:h-[100%] md:h-[80%] sm:h-[60%] place-self-center md:mb-0 !mb-5">
              <img
                src={Stay3}
                alt=""
                className="w-[100%] h-[100%]  rounded-[20px] object-contain !p-3"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 4 */}
      <section className="bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] !my-10 lg:!mt-30 md:!mx-30 !mx-10 rounded-[20px]">
        <div className="md:!p-15 !p-5">
          <div className="!px-10 sm:!px-5 !py-3 rounded-[40px] bg-white w-[180px]">
            <h2 className=" text-center font-medium  text-[16px] uppercase bg-clip-text bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD]  text-transparent">
              client say
            </h2>
          </div>
          <div className="w-full lg:flex grid items-center sm:!mt-5 md:!mt-0 lg:!mt-0 !mt-5">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-white lg:text-[50px] md:text-[50px] sm:text-[25px] text-[20px] uppercase font-bold">
                See how we're changing finances
              </h2>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-white sm:text-[18px] lg:text-[20px] md:text-[20px] text-[16px] capitalize font-medium">
                Thousands of lenders trust Accrix to simplify their financial
                journey. From solo lenders to large teams, our users are
                tracking repayments faster, staying organized, and growing
                smarter. But don’t just take our word for it—here’s what our
                users are saying.
              </h2>
            </div>
          </div>
          <div>
            <div className="lg:flex grid lg:!gap-5 w-full !mt-5">
              <div className="lg:w-1/3 w-full  lg:h-[60vh] md:h-[60vh] h-[30vh] sm:h-[40vh]  ">
                <img
                  src={selected?.imageurl}
                  alt=""
                  className="w-[90%] h-[90%] object-cover rounded-[20px]"
                />
              </div>
              <div className="lg:w-2/3 w-full place-self-center !mb-5 lg:!mb-0 ">
                <Rate disabled defaultValue={3} />
                <h2 className="text-white sm:text-[18px] lg:text-[20px] md:text-[20px] text-[16px] capitalize font-medium !mt-4">
                  {selected?.comment}
                </h2>
                <h4 className="text-white sm:text-[18px] lg:text-[20px] md:text-[20px] text-[16px] uppercase  font-medium !mt-4">
                  {selected?.name}
                </h4>
                <h4 className="text-white sm:text-[18px] lg:text-[20px] md:text-[20px] text-[16px] capitalize font-medium !mt-2">
                  {selected?.occupation}
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full lg:flex grid justify-between items-center">
            <div className="flex !gap-4 ">
              {testimonail?.map((item, index) => {
                const isActive = item?.id === selected?.id;
                return (
                  <div
                    key={item?.id}
                    className="cursor-pointer"
                    onClick={() => setSelected(item)}
                  >
                    <img
                      src={item?.imageurl}
                      alt="profileimage"
                      className="sm:w-[100px] w-[80px] sm:h-[100px] h-[60px] object-cover sm:rounded-[20px] rounded-[10px]"
                      style={{ opacity: isActive ? 1 : 0.5 }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex gap-5 !mt-10 lg:!mt-10  justify-between">
              <div className="cursor-pointer" onClick={handlePrev}>
                <IoIosArrowDropleftCircle size={50} color="#fff" />
              </div>
              <div className="cursor-pointer" onClick={handleNext}>
                <IoIosArrowDroprightCircle size={50} color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section className="lg:!mt-30 lg:!px-30 md:!px-20 !px-10 !py-10bg-white">
        <div className="w-full lg:flex grid !gap-5">
          <div className="lg:w-1/2 w-full place-content-center">
            <div>
              <h3>Frequantly Ask Questions</h3>
              <h3 className="!mt-3 text-black text-[30px] font-semibold">
                What is Accrix, and who is it designed for?
              </h3>
              <p className="!mt-3 text-black text-[20px] font-sans">
                Accrix is a subscription-based SaaS platform built for
                individuals and institutions involved in money lending. It
                offers digital tools to manage transactions, monitor repayments,
                and automate follow-ups efficiently.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div>
              {accodion?.map((item, index) => {
                const isselected = selectedaccordion?.id === item?.id;
                return (
                  <div
                    key={index}
                    className="!mb-2 grid group cursor-pointer"
                    onClick={() => setSelectedaccordion(item)}
                  >
                    <div className="flex justify-between !px-7 !py-4 bg-gray-100 rounded-[5px]">
                      <h3
                        className="text-black text-[15px] font-medium "
                        style={{ color: !isselected ? "#000" : "#E770C0" }}
                      >
                        {item?.title}
                      </h3>
                      {!isselected ? (
                        <FaCircleArrowDown color="#000" size={20} />
                      ) : (
                        <FaCircleArrowUp color="#E770C0" size={20} />
                      )}
                    </div>
                    {isselected && (
                      <div className="!px-5 !py-2">
                        <h3 className="!mt-3 text-black text-[14px] font-sans">
                          {item?.answer}
                        </h3>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section></section>
    </div>
  );
}

export default Main;
