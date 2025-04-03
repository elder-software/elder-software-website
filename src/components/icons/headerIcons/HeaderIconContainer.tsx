import React from "react";
import Link from "next/link";

interface HeaderIconContainerProps {
  href: string;
  text: string;
  textSize?: number;
  children: React.ReactNode;
}

const HeaderIconContainer: React.FC<HeaderIconContainerProps> = ({
  href,
  text,
  textSize,
  children,
}) => (
  <Link href={href}>
    <div
      className={`
        group flex flex-col items-center content-center text-center
        bg-black rounded px-2.5 py-1
        transition-colors duration-500 hover:bg-white
      `}
    >
      {children}
      <h5
        className={`
          iconText m-0 p-0 border-0 text-white
          transition-colors duration-500 group-hover:text-black
        `}
        style={{ fontSize: textSize }}
      >
        {text}
      </h5>
    </div>
  </Link>
);

export { HeaderIconContainer };
