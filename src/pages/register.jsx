import React from "react";
import register from "../assets/register3.png";

export default function Register() {
  return (
    <div>
      <meta
        name="description"
        content="Learn more about our team and mission."
      />
      <div className="w-full !mb-10">
        <img src={register} alt="" className="object-contain" />
      </div>
      <div></div>
    </div>
  );
}
