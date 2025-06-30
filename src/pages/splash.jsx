import React from "react";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Splash() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#E770C0] via-[#C670DE] to-[#9F70FD]  grid items-center justify-center">
      <div className="justify-items-center">
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 100, color: "#fff" }} spin />
          }
        />
        <h4 className="text-white text-[50px] capitalize font-monoton ">
          accrix
        </h4>
      </div>
    </div>
  );
}

export default Splash;
