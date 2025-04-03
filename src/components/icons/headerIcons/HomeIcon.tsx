import React from "react";
import { FaHome } from "react-icons/fa";
import { HeaderIconContainer, HeaderIconProps } from "./HeaderIconContainer";

const HomeIcon: React.FC<HeaderIconProps> = ({ size, textSize, isActive }) => (
  <HeaderIconContainer
    text="Home"
    icon={FaHome}
    size={size}
    textSize={textSize}
    isActive={isActive}
  />
);

export { HomeIcon };
