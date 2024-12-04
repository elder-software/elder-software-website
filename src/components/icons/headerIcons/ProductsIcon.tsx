import React from "react";
import { TbPackages } from "react-icons/tb";
import { HeaderIconProps } from "./styles";
import "./index.css";
import Link from "next/link";

const ProductsIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link href="/products">
    <div className="iconBackground">
      <TbPackages
        className="icon"
        style={{
          height: size || 80,
          width: size || 80,
        }}
      />
      <h5 className="iconText" style={{ fontSize: textSize }}>
        Products
      </h5>
    </div>
  </Link>
);

export { ProductsIcon };
