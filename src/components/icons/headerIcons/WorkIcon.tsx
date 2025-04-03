import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { HeaderIconContainer, HeaderIconProps } from "./HeaderIconContainer";

const WorkIcon: React.FC<HeaderIconProps> = ({ size, textSize, isActive }) => (
  <HeaderIconContainer
    text="Work"
    icon={FaBriefcase}
    size={size}
    textSize={textSize}
    isActive={isActive}
  />
);

export { WorkIcon };
