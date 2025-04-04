"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FooterIcon } from "./FooterIcon";
import { MdContactMail } from "react-icons/md";
import { FaHome, FaBriefcase } from "react-icons/fa";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 flex justify-around py-4 border-t border-black bg-blue-700 shadow-md rounded-t-xl mx-2 sm:mx-4 md:mx-32">
      <Link href="/">
        <FooterIcon
          text="Home"
          icon={FaHome}
          size={isMobile ? 15 : 23}
          textSize={isMobile ? 6 : 10}
          isActive={pathname === "/"}
        />
      </Link>
      <Link href="/work">
        <FooterIcon
          text="Work"
          icon={FaBriefcase}
          size={isMobile ? 15 : 23}
          textSize={isMobile ? 6 : 10}
          isActive={pathname === "/work"}
        />
      </Link>
      {/* <Link href="/products">
        <HeaderIcon
          text="Products"
          icon={FaShoppingCart}
          size={isMobile ? 15 : 23}
          textSize={isMobile ? 6 : 10}
          isActive={pathname === "/products"}
        />
      </Link> */}
      <Link href="/contact">
        <FooterIcon
          text="Contact"
          icon={MdContactMail}
          size={isMobile ? 15 : 23}
          textSize={isMobile ? 6 : 10}
          isActive={pathname === "/contact"}
        />
      </Link>
    </div>
  );
};

export default Footer;
