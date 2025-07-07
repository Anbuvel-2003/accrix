import React from "react";
import { useNavigate } from "react-router-dom";

function Thankyou() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-white">
      <div className="justify-items-center">
        <h2 className="text-[50px] text-black ">
          Thank <span className="underline decoration-[#9F70FD]">You!</span>
        </h2>
        <h3 className="!my-5 text-center !px-10">
          We’ve received your request. Our team will get back to you shortly
        </h3>
        <div
          className="bg-[#9F70FD] rounded-[50px] !p-5 !px-10 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <h2 className="text-white text-[20px] font-medium">Back to home</h2>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
