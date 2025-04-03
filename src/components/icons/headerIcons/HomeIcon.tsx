import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { HeaderIconContainer, HeaderIconProps } from "./HeaderIconContainer";

const HomeIcon: React.FC<HeaderIconProps> = ({ size, textSize, isActive }) => (
  <HeaderIconContainer text="Home" textSize={textSize} isActive={isActive}>
    <FaHome
      className={`
        icon self-center
        transition-colors duration-500 group-hover:text-black
        ${isActive ? 'text-black' : 'text-white'}
      `}
      style={{ height: size || 80, width: size || 80 }}
    />
  </HeaderIconContainer>
);

export { HomeIcon };
