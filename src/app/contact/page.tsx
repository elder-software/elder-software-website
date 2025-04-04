"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import Link from "next/link";

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

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-5 box-border">
      <h1 className="mb-10 text-4xl text-gray-800">Get in Touch</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <Link
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
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
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
