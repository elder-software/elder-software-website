import React from "react";
import { TbPackages } from "react-icons/tb";
import { HeaderIconProps } from "./styles";
import { HeaderIconContainer } from "./HeaderIconContainer";

const ProductsIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <HeaderIconContainer text="Products" textSize={textSize}>
    <TbPackages
      className={`
        icon self-center text-white
        transition-colors duration-500 group-hover:text-black
      `}
      style={{ height: size || 80, width: size || 80 }}
    />
  </HeaderIconContainer>
);

export { ProductsIcon };
