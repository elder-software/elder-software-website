import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HeaderIconContainer, HeaderIconProps } from "./HeaderIconContainer";

const ProductsIcon: React.FC<HeaderIconProps> = ({ size, textSize, isActive }) => (
  <HeaderIconContainer text="Products" textSize={textSize} isActive={isActive}>
    <FaShoppingCart
      className={`
        icon self-center
        transition-colors duration-500 group-hover:text-black
        ${isActive ? 'text-black' : 'text-white'}
      `}
      style={{ height: size || 80, width: size || 80 }}
    />
  </HeaderIconContainer>
);

export { ProductsIcon };
