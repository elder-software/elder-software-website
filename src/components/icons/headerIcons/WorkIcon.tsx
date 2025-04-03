import React from "react";
import { MdWork } from "react-icons/md";
import { HeaderIconProps } from "./styles";
import Link from "next/link";

const WorkIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link href="/work">
    <div
      className={`
        group flex flex-col items-center content-center text-center
        bg-black rounded px-2.5 py-1
        transition-colors duration-500 hover:bg-white
      `}
    >
      <MdWork
        className={`
          icon self-center text-white
          transition-colors duration-500 group-hover:text-black
        `}
        style={{ height: size || 80, width: size || 80 }}
      />
      <h5
        className={`
          iconText m-0 p-0 border-0 text-white
          transition-colors duration-500 group-hover:text-black
        `}
        style={{ fontSize: textSize }}
      >
        Work
      </h5>
    </div>
  </Link>
);

export { WorkIcon };
