import React from "react";
import { MdWork } from "react-icons/md";
import { HeaderIconProps } from "./styles";
import { HeaderIconContainer } from "./HeaderIconContainer";

const WorkIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <HeaderIconContainer href="/work" text="Work" textSize={textSize}>
    <MdWork
      className={`
        icon self-center text-white
        transition-colors duration-500 group-hover:text-black
      `}
      style={{ height: size || 80, width: size || 80 }}
    />
  </HeaderIconContainer>
);

export { WorkIcon };
