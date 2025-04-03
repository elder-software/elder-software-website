import React from "react";
import { MdContactMail } from "react-icons/md";
import { HeaderIconContainer, HeaderIconProps } from "./HeaderIconContainer";

const ContactIcon: React.FC<HeaderIconProps> = ({ size, textSize, isActive }) => (
  <HeaderIconContainer text="Contact" textSize={textSize} isActive={isActive}>
    <MdContactMail
      className={`
        icon self-center
        transition-colors duration-500 group-hover:text-black
        ${isActive ? 'text-black' : 'text-white'}
      `}
      style={{ height: size || 80, width: size || 80 }}
    />
  </HeaderIconContainer>
);

export { ContactIcon };
