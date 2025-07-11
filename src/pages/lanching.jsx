import React, { useEffect, useState } from "react";
import bgimg from "../assets/lanchingpage.png";
import "../App.css";
import logo from "../assets/accrixlogo.png";
function Lanching() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 🕒 Launching on July 14, 2025 at 00:00
  const launchDate = new Date("2025-07-14T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const totalHours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ hours: totalHours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        className="w-full h-full object-cover"
        alt="Launching Background"
        src={bgimg}
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6">
        <div>
          <img alt="" src={logo}  />
        </div>
        <h2 className="lg:text-[100px] md:text-[80px] sm:text-[60px] text-[40px] countdown-label text-white  capitalize">
          Launching In!!
        </h2>
        <div className="flex gap-8 text-white text-2xl font-medium ">
          <div className="flex flex-col items-center">
            <span className="lg:text-[100px] md:text-[80px] sm:text-[60px] text-[40px] countdown-digit">
              {timeLeft.hours}
            </span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="lg:text-[100px] md:text-[80px] sm:text-[60px] text-[40px] countdown-digit">
              {timeLeft.minutes}
            </span>
             <span className="countdown-label">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="lg:text-[100px] md:text-[80px] sm:text-[60px] text-[40px] countdown-digit">
              {timeLeft.seconds}
            </span>
             <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lanching;
