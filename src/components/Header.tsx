"use client"

import React from "react";
import {
  ContactIcon,
  HomeIcon,
  ProductsIcon,
  WorkIcon,
} from "./icons/headerIcons";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  const resize = () => setIsMobile(window.innerWidth <= 1000);

  return (
    <div>
      <div className="flex flex-row justify-center m-[2%] opacity-85">
        <Image
          className={`${isMobile ? "w-[20%]" : "w-[10%]"} h-full`}
          src="/logo.jpeg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      <div className="flex justify-around py-[1%] border border-black rounded-[15px] mx-5 bg-black opacity-85 shadow-md">
        <HomeIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <WorkIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <ProductsIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <ContactIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
      </div>
    </div>
  );
};

export default Header;
