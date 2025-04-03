import React from "react";
import { TbPackages } from "react-icons/tb";
import { HeaderIconProps } from "./styles";
import Link from "next/link";

const ProductsIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link href="/products">
    <div
      className={`
        group flex flex-col items-center content-center text-center
        bg-black rounded px-2.5 py-1
        transition-colors duration-500 hover:bg-white
      `}
    >
      <TbPackages
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
        Products
      </h5>
    </div>
  </Link>
);

export { ProductsIcon };
