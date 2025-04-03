import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { HeaderIconProps } from "./styles";
import { HeaderIconContainer } from "./HeaderIconContainer";

const HomeIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <HeaderIconContainer href="/" text="Home" textSize={textSize}>
    <FaHome
      className={`
        icon self-center text-white
        transition-colors duration-500 group-hover:text-black
      `}
      style={{ height: size || 80, width: size || 80 }}
    />
  </HeaderIconContainer>
);

export { HomeIcon };
