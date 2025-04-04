"use client";

import React from "react";
import AboutProfessionalSummary from "./AboutProfessionalSummary";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, staggerChildren: 0.4 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden justify-items-center mx-auto my-8 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-[80%] flex items-center justify-center mx-auto pt-4"
        variants={childVariants}
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

        <div className="flex-[2_1_55%] p-8 flex items-center justify-center">
          <Image
            src="/logo512.png"
            alt="Elder Software Logo"
            width={90}
            height={90}
            className="mr-8"
          />
          <div>
            <h1 className="text-center text-[20px] md:text-[40px]">
              James Elder
            </h1>
            <h1 className="text-center text-[14px] md:text-[26px]">
              Mobile Developer
            </h1>
          </div>
        </div>
      </motion.div>
      <div className="h-10" />
      <motion.div
        className="w-[60%] flex items-center justify-center mx-auto pb-4"
        variants={childVariants}
      >
        <AboutProfessionalSummary />
      </motion.div>
    </motion.div>
  );
};

export default About;
