"use client";

import React from "react";
import HomeAboutSection from "./AboutPersonal";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="w-full mt-2.5 px-4">
      <div className="rounded-[15px] shadow-[2px_2px_2px_#DFDFDF] bg-[#e8e8e8] p-4">
        <div className="rounded-t-[15px] py-2 justify-items-center">
          <div className="w-[80%] bg-white rounded-[15px] overflow-hidden justify-items-center">
            <div className="w-[80%] flex items-center justify-center">
              <div className="flex-[1_1_45%]">
                <Image
                  className="rounded-l-[15px] opacity-95"
                  src={"/jamie-photo.jpg"}
                  alt="james-potrait"
                  width={200}
                  height={200}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>

              <div className="flex-[2_1_55%] p-8">
                <h1 className="text-center text-[20px] md:text-[40px]">
                  James Elder
                </h1>
                <h1 className="text-center text-[13px] md:text-[26px]">
                  Mobile Developer
                </h1>
              </div>
            </div>
            <div className="h-16" />
            <div className="w-[60%] flex items-center justify-center">
              <HomeAboutSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
