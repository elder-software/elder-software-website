"use client"

import React from "react";
import HomeAboutSection from "./AboutPersonal";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="w-full mt-2.5 px-4">
      <div className="w-full rounded-[15px] shadow-[2px_2px_2px_#DFDFDF] bg-[#e8e8e8] p-1.25">
        <div className="rounded-t-[15px] py-8">
          <div className="bg-white rounded-[15px] overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-12 items-center">
              <div className="col-span-5">
                <Image
                  className="rounded-l-[15px] opacity-95"
                  src={"/jamie-photo.jpg"}
                  alt="james-potrait"
                  width={400}
                  height={400}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>

              <div className="col-span-7 p-8">
                <h1 className="text-center text-[20px] md:text-[40px]">
                  James Elder
                </h1>
                <h1 className="text-center text-[13px] md:text-[26px]">
                  Mobile Developer
                </h1>
              </div>
            </div>
            <HomeAboutSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
