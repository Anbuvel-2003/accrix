import React, { useRef, useState } from "react";
// import contactus from "../assets/Contactus.png";
import contactus1 from "../assets/Contactus1.png";
import contactus2 from "../assets/Contactus2.png";
import { FloatingLabel } from "flowbite-react";
import { Input } from "antd";
import emailjs from "@emailjs/browser";

const { TextArea } = Input;

function ContactUs() {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_d4v7wbl";
    const templateId = "template_ukicvmu";
    const publicKey = "c6GyoGlRoRVZMY1lI";
    const templateparams = {
      title: subject,
      name: name,
      message: message,
      email: email,
    };
    emailjs
      .send(serviceId, templateId, templateparams, publicKey)
      .then((response) => {
        console.log("email sent successfully", response);
        alert("Email sent successfully");
      });
  };
  return (
    <div className="">
      <div className="w-full !mb-10">
        <img src={contactus1} alt="" className="object-contain w-full" />
      </div>
      <div>
        <div className="lg:px-0 md:!px-20 !px-10">
          <h3 className="lg:text-[45px] md:text-[30px] sm:text-[20px] text-[20px] capitalize text-black font-semibold text-center">
            We're Here to Guide You
          </h3>
          <h2 className="md:text-[20px] sm:text-[18px] text-[16px]  text-black font-light text-center">
            We’re here to help you make confident financial decisions. Whether
            you have questions, need guidance,
            <br /> or wish to explore our services—reach out to us anytime.
            Let’s build your future, together.
          </h2>
        </div>
        <div className="w-full lg:flex block lg:!mt-15 md:!mt-10 mt-5 ">
          <div className="lg:w-1/2 w-full ">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 !p-10 "
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                    className="w-full !px-4 !py-3 border border-gray-300 rounded-lg transition duration-200 !mb-3"
                    placeholder="Name..."
                  />
                </div>

                {/* <div>
                  <label
                    htmlFor="email"
                    className="block text-[#9e9e9e] font-syne lg:text-2xl sm:text-xl !mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full !px-4 !py-3 border border-gray-300 rounded-lg  transition duration-200 !mb-3"
                    placeholder="your.email@example.com"
                  />
                </div> */}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full !px-4 !py-3 border border-gray-300 rounded-lg  transition duration-200 !mb-3"
                  placeholder="email..."
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  name="subject"
                  className="w-full !px-4 !py-3 border border-gray-300 rounded-lg  transition duration-200 !mb-3"
                  placeholder="subject..."
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="w-full !px-4 !py-3 border border-gray-300 rounded-lg transition duration-200 !mb-3"
                  placeholder="Message..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full cursor-pointer relative overflow-hidde border border-transparent hover:!bg-white hover:text-[#9F70FD] hover:border-[#9F70FD] bg-[#9F70FD] text-white font-medium !py-3 !px-6 rounded-lg transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 w-full lg:p-0 md:!px-20 md:!py-10 !px-10 !py-10 ">
            <img
              alt=""
              src={contactus2}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
