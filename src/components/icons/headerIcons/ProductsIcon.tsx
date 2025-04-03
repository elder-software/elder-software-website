import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HeaderIconContainer, HeaderIconProps } from "./HeaderIconContainer";

const ProductsIcon: React.FC<HeaderIconProps> = ({ size, textSize, isActive }) => (
  <HeaderIconContainer
    text="Products"
    icon={FaShoppingCart}
    size={size}
    textSize={textSize}
    isActive={isActive}
  />
);

export { ProductsIcon };
