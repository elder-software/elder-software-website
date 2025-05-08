import React from "react";
import { FaMapMarkerAlt, FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";

const summaryData = [
  {
    Icon: FaLaptop,
    text: "Expert software engineer with 7 years of professional experience.",
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
  return (
    <div className="py-4 md:py-8 w-full">
      <div className="px-0 md:px-4 w-full">
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {summaryData.map(({ Icon, text, key }) => (
            <motion.div
              key={key}
              className="flex flex-col items-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200 flex-1 text-center"
              variants={tileVariants}
            >
              <Icon
                size={35}
                className="text-blue-600 mb-3 md:mb-4 md:text-[50px]"
              />
              <p className="text-sm text-gray-700">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutProfessionalSummary;
