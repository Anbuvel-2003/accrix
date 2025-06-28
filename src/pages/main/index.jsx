import React, { useEffect, useState } from "react";
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import profile4 from '../../assets/profile1.jpg'
import profile5 from '../../assets/profile5.jpg'
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { Rate } from 'antd';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import Intropage from "./intropage";

function Main() {
  const testimonail = [
    {
      id: 1,
      imageurl: profile1,
      rating: 4,
      comment: "This website offers in-depth guides on budgeting, investing, and retirement planning, making complex financial topics accessible to everyone. The step-by-step approach empowers users to take control of their financial futures.",
      name: "sample",
      occupation: "coimbatore"
    },
    {
      id: 2,
      imageurl: profile2,
      rating: 5,
      comment: "Stay updated with the latest market trends and financial news through this site’s timely articles and expert analyses. The insights provided help users make informed decisions in a rapidly changing economic landscape.",
      name: "sample",
      occupation: "coimbatore"
    },
    {
      id: 3,
      imageurl: profile3,
      rating: 3,
      comment: "This platform shares timeless financial advice that remains relevant regardless of market fluctuations. From saving strategies to debt management, the tips are practical and easy to implement for users at any stage of their financial journey.",
      name: "sample",
      occupation: "coimbatore"
    },
    {
      id: 4,
      imageurl: profile2,
      rating: 2,
      comment: "With user-friendly budgeting calculators and investment simulators, this website enhances the financial planning experience. These interactive tools provide personalized insights, making it easier for users to visualize their financial goals.",
      name: "sample",
      occupation: "coimbatore"
    }, {
      id: 5,
      imageurl: profile5,
      rating: 5,
      comment: "With user-friendly budgeting calculators and investment simulators, this website enhances the financial planning experience. These interactive tools provide personalized insights, making it easier for users to visualize their financial goals.",
      name: "sample",
      occupation: "coimbatore"
    }
  ]
  const accodion = [
    {
      id: 1,
      title: "What is a budget and its main purpose?",
      answer: "A budget is a financial plan that helps track income and expenses, promoting better money management and achieving financial goals."
    },
    {
      id: 2,
      title: "What are the benefits of investing in stocks?",
      answer: "Investing in stocks offers potential for long-term growth, dividends, and the opportunity to share in a company's success and profits. "
    },
    {
      id: 3,
      title: "How does compound interest affect savings over time?",
      answer: "Compound interest accelerates savings growth by earning interest on both the principal and accumulated interest, maximizing returns over time."
    },
    {
      id: 4,
      title: "What factors influence a person's credit score significantly?",
      answer: "Credit scores are affected by payment history, credit utilization, length of credit history, types of credit, and recent inquiries."
    },
    {
      id: 5,
      title: "How can individuals improve their financial literacy effectively?",
      answer: "Individuals can improve financial literacy by reading books, attending workshops, taking courses, and consulting financial advisors for expert guidance."
    },
  ]
  const [selected, setSelected] = useState(testimonail[0]);
  const [selectedaccordion, setSelectedaccordion] = useState(accodion[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [selected]);
  const handleNext = () => {
    const currentIndex = testimonail.findIndex((item) => item.id === selected.id);
    if (currentIndex == 4) {
      setSelected(testimonail[0]);
    } else {
      setSelected(testimonail[currentIndex + 1]);
    }
  }
  const handlePrev = () => {
    const currentIndex = testimonail.findIndex((item) => item.id === selected.id);
    if (currentIndex == 0) {
      setSelected(testimonail[4]);
    } else {
      setSelected(testimonail[currentIndex - 1]);
    }
  }
  return (
    <div>
      <Intropage />
      {/* section 1 */}
      <section className="!px-20 !py-10 bg-white">
        <div>
          <h1 className="text-[45px] capitalize text-black font-semibold">finance made Simple.</h1>
          <h1 className="text-[45px] capitalize text-black font-semibold">results means real. </h1>
          <div className="flex justify-between items-center ">
            <p className="text-[20px] text-black capitalize font-sans">we strip away the complexity of money management with easy-to-use tools and clear insights.</p>
            <button className="!px-10 !py-5 rounded-[40px] cursor-pointer text-white bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD]">Get started free</button>
          </div>
          <div className="!mt-5">
            <div className="w-full h-[80vh] flex">
              <div className="w-full ">
                <div className="flex gap-5 h-1/2">
                  <div className="">
                    <img src="https://media.istockphoto.com/id/1346853640/photo/saving-money-concept-man-hand-putting-row-and-coin-write-finance-saving-money-concept-man.jpg?s=612x612&w=0&k=20&c=1I48V9GUU0liAJ-dMA4SW-h5LoejkBTlEZJ-0b_vmXE=" alt=""
                      className="rounded-[20px]"
                    />
                  </div>
                  <div className="">
                    <img src="https://media.istockphoto.com/id/1346853640/photo/saving-money-concept-man-hand-putting-row-and-coin-write-finance-saving-money-concept-man.jpg?s=612x612&w=0&k=20&c=1I48V9GUU0liAJ-dMA4SW-h5LoejkBTlEZJ-0b_vmXE="
                      className="rounded-[20px]"
                      alt="" />
                  </div>


                </div>
                <div className="!mt-5 w-full h-[45%] rounded-[20px] bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] !px-10">
                  <div className="flex gap-5 !py-5">
                    <div className="w-1/3 ">
                      <h5 className="text-[90px] text-white font-bold text-center">1.5M</h5>
                      <h5 className="text-[20px] text-white capitalize font-sans text-center">Active users</h5>
                    </div>
                    <div className=" w-1/3">
                      <h5 className="text-[90px] text-white font-bold text-center">46+</h5>
                      <h5 className="text-[20px] text-white capitalize font-sans text-center">Country</h5>
                    </div >
                    <div className=" w-1/3">
                      <h5 className="text-[90px] text-white font-bold text-center">140+</h5>
                      <h5 className="text-[20px] text-white capitalize font-sans text-center">startups</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 !ml-5 h-[full]">
                <div className="w-full h-full ">
                  <img src="https://media.istockphoto.com/id/1346853640/photo/saving-money-concept-man-hand-putting-row-and-coin-write-finance-saving-money-concept-man.jpg?s=612x612&w=0&k=20&c=1I48V9GUU0liAJ-dMA4SW-h5LoejkBTlEZJ-0b_vmXE="
                    className="w-full h-full object-cover rounded-[20px]"
                    alt="" />
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
      <section className="!px-20 !py-10 bg-white">
        <div>
          <h3 className="text-[45px] capitalize text-black font-semibold text-center">Stay in Control of Your Finances</h3>
          <h2 className="text-[20px]  text-black font-sans text-center">
            Simplify your financial workflow with powerful tools designed tools designed to save you time and keep <br /> your business running smoothly
          </h2>
          <div className="w-full flex !gap-10 !mt-20">
            <div className="w-1/2">
              <img src={profile4} alt="" className="w-full h-[90%] bg-amber-300 rounded-[20px]" />
            </div>
            <div className="w-1/2">
              <img src={profile4} alt="" className="w-full h-[90%] bg-amber-300 rounded-[20px]" />
            </div>
          </div>
          <div className="w-full h-[70vh] flex !gap-10 bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] rounded-[20px] ">
            <div className="w-full place-content-center">
              <h2 className="text-[45px] capitalize text-white font-semibold text-center">Smart Analytics & Reporting</h2>
              <h2 className="text-[20px] text-white font-sans text-center">Smart analytics and reporting in finance utilize advanced data analysis to transform financial data into actionable insights. This enhances decision-making, optimizes resource allocation, and improves overall financial performance for organizations.</h2>
            </div>
            <div className="w-[60vw] h-[100%]">
              <img src={profile4} alt="" className="w-[100%] h-[100%] bg-amber-300 rounded-[20px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD] !my-10 !mx-20 rounded-[20px]">
        <div className="!p-15">
          <div className="!px-10 !py-3 rounded-[40px] bg-white w-[180px]">
            <h2 className=" text-center font-medium  text-[16px] uppercase bg-clip-text bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD]  text-transparent">
              client say
            </h2>
          </div>
          <div className="w-full flex items-center">
            <div className="w-1/2">
              <h2 className="text-white text-[50px] uppercase font-bold">See how we're changing finances</h2>
            </div>
            <div className="w-1/2">
              <h2 className="text-white text-[20px] capitalize font-medium">from freelancer to families, our users are reaching their money goals faster than ever. thousands are already saving smarter. here's what they have to say </h2>
            </div>
          </div>
          <div>
            <div className="flex gap-5 w-full !mt-5">
              <div className="w-1/3  h-[60vh]">
                <img src={selected?.imageurl} alt="" className="w-[90%] h-[90%] object-cover rounded-[20px]" />
              </div>
              <div className="w-2/3 place-self-center ">
                <Rate disabled defaultValue={3} />
                <h2 className="text-white text-[20px] capitalize font-medium !mt-4">{selected?.comment}</h2>
                <h4 className="text-white text-[20px] uppercase  font-medium !mt-4">{selected?.name}</h4>
                <h4 className="text-white text-[20px] capitalize font-medium !mt-2">{selected?.occupation}</h4>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex !gap-4">
              {testimonail?.map((item, index) => {
                const isActive = item?.id === selected?.id;
                return (
                  <div key={item?.id} className="cursor-pointer" onClick={() => setSelected(item)}>
                    <img src={item?.imageurl} alt="profileimage" className="w-[100px] h-[100px] object-cover rounded-[20px]" style={{ opacity: isActive ? 1 : 0.5 }} />
                  </div>
                )
              })}
            </div>
            <div className="flex gap-5">
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

      {/* section 4 */}
      <section className="!px-20 !py-10 bg-white">
        <div className="w-full flex !gap-5">
          <div className="w-1/2 place-content-center">
            <div>
              <h3>Frequantly Ask Questions</h3>
              <h3 className="!mt-3 text-black text-[30px] font-semibold">Frequantly Ask Questions ?</h3>
              <p className="!mt-3 text-black text-[20px] font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quae, quos quia quidem quisquam quod quas quibusdam quae
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                quae, quos quia quidem quisquam quod quas quibusdam quae
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <div >
              {
                accodion?.map((item, index) => {
                  const isselected = selectedaccordion?.id === item?.id;
                  return (
                    <div key={index} className="!mb-2 grid group cursor-pointer" onClick={() => setSelectedaccordion(item)}>
                      <div className="flex justify-between !px-7 !py-4 bg-gray-100 rounded-[5px]">
                        <h3 className="text-black text-[15px] font-medium " style={{ color: !isselected ? "#000" : "#E770C0" }}>{item?.title}</h3>
                        {
                          !isselected ?
                            <FaCircleArrowDown color="#000" size={20} /> :
                            <FaCircleArrowUp color="#E770C0" size={20} />
                        }
                      </div>
                      {
                        isselected &&
                        <div className="!px-5 !py-2">
                          <h3 className="!mt-3 text-black text-[14px] font-sans">{item?.answer}</h3>
                        </div>
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section>

      </section>
    </div>
  )
}

export default Main;
