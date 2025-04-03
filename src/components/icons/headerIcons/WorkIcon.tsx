import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { HeaderIconContainer, HeaderIconProps } from "./HeaderIconContainer";

const WorkIcon: React.FC<HeaderIconProps> = ({ size, textSize, isActive }) => (
  <HeaderIconContainer text="Work" textSize={textSize} isActive={isActive}>
    <FaBriefcase
      className={`
        icon self-center
        transition-colors duration-500 group-hover:text-black
        ${isActive ? 'text-black' : 'text-white'}
      `}
      style={{ height: size || 80, width: size || 80 }}
    />
  </HeaderIconContainer>
);

export { WorkIcon };
