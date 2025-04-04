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
      className="bg-white rounded-xl overflow-hidden w-full shadow-lg p-4 md:p-0 h-full flex flex-col justify-center my-16 sm:my-6 md:my-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-8 md:gap-8 mx-auto py-4 md:py-8 px-32 md:px-8 w-full"
        variants={childVariants}
      >
        <div className="w-1/3 md:w-1/3 flex-shrink-0">
          <Image
            className="opacity-95 rounded-[25%] w-full h-auto object-cover"
            src={"/jamie-photo.webp"}
            alt="james-potrait"
            width={150}
            height={150}
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-4 md:gap-4">
          <Image
            src="/logo512.png"
            alt="Elder Software Logo"
            width={60}
            height={60}
            className="md:w-[60px] md:h-[60px] self-center"
          />

          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
              James Elder
            </h1>
            <h2 className="text-md md:text-xl text-gray-600 text-center">
              Mobile and Web
            </h2>
          </div>
        </div>
      </motion.div>

      <div className="flex-1" />
      <motion.div
        className="w-full px-32 pb-4 md:pb-8"
        variants={childVariants}
      >
        <AboutProfessionalSummary />
      </motion.div>
    </motion.div>
  );
};

export default About;
