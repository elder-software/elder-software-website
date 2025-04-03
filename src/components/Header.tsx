"use client"

import React, { useState, useEffect } from "react";
import {
  ContactIcon,
  HomeIcon,
  ProductsIcon,
  WorkIcon,
} from "./icons/headerIcons";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 50);
      setOpacity(newOpacity);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="sticky top-0 z-10 transition-opacity duration-300"
      style={{ opacity, pointerEvents: opacity < 0.1 ? 'none' : 'auto' }}
    >
      <div className="flex flex-row justify-center m-[2%] my-12">
        <Image
          className={`${isMobile ? "w-[20%]" : "w-[10%]"} h-full`}
          src="/logo.jpeg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      <div className="flex justify-around py-[1%] border border-black rounded-[15px] mx-5 bg-black shadow-md">
        <Link href="/">
          <HomeIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        </Link>
        <Link href="/work">
          <WorkIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        </Link>
        <Link href="/products">
          <ProductsIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        </Link>
        <Link href="/contact">
          <ContactIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
