"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContactIconProps {
  size?: number;
}

type ContactMethod = {
  icon: React.ComponentType<ContactIconProps>;
  label: string;
  href: string;
  bgColor: string;
};

const contactMethods: ContactMethod[] = [
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:james@elder-software.com",
    bgColor: "bg-[#a2b7ac]",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/elder-software",
    bgColor: "bg-[#aa9590]",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/james-elder-8a335119a/",
    bgColor: "bg-[#b0b1c2]",
  },
];

// Define animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Stagger the animation of children
      delayChildren: 0.2, // Add a small delay after the title animates
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-5 box-border">
      <motion.h1
        className="mb-10 text-4xl text-gray-800"
        variants={titleVariants}
        initial="hidden"
        animate="show"
      >
        Get in Touch
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.div key={index} variants={itemVariants} className="flex">
              <Link
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex-grow
                  ${method.bgColor}
                  aspect-square
                  rounded-2xl
                  flex flex-col items-center justify-center
                  text-white no-underline text-center
                  p-5
                  transition-all duration-200 ease-in-out
                  hover:scale-105 hover:shadow-lg
                  cursor-pointer
                `}
              >
                <Icon size={60} />
                <span className="mt-4 text-base font-bold">{method.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Contact;
