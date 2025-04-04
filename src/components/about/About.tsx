"use client";

import React from "react";
import HomeAboutSection from "./AboutPersonal";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden justify-items-center mx-auto my-8 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.2 }}
    >
      <motion.div
        className="w-[80%] flex items-center justify-center mx-auto pt-4"
      >
        <div className="flex-[1_1_45%]">
          <Image
            className="opacity-95 rounded-3xl w-[100%] h-[100%]"
            src={"/jamie-photo.webp"}
            alt="james-potrait"
            width={200}
            height={200}
            priority
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
      </motion.div>
      <div className="h-10" />
      <motion.div
        className="w-[60%] flex items-center justify-center mx-auto pb-4"
      >
        <HomeAboutSection />
      </motion.div>
    </motion.div>
  );
};

export default About;
