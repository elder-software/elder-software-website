import React from "react";
import { FaMapMarkerAlt, FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const summaryData = [
  {
    Icon: FaLaptop,
    text: "Expert software engineer with 8 years of professional experience.",
    key: "experience",
  },
  {
    Icon: FaMapMarkerAlt,
    text: "Based in Melbourne, Australia.",
    key: "location",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutProfessionalSummary: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="py-8 w-full">
      <div className="max-w-3xl mx-auto px-4 md:px-8 w-full">
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {summaryData.map(({ Icon, text, key }) => (
            <motion.div
              key={key}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200 flex-1 text-center"
              variants={tileVariants}
            >
              <Icon
                size={isMobile ? 35 : 50}
                className="text-blue-600 mb-4"
              />
              <p className="text-[12px] md:text-[16px] text-gray-700">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProfessionalSummary;
