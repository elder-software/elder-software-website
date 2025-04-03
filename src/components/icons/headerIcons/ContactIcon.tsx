import React from "react";
import { MdEmail } from "react-icons/md";
import { HeaderIconProps } from "./styles";
import { HeaderIconContainer } from "./HeaderIconContainer";

const ContactIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <HeaderIconContainer text="Contact" textSize={textSize}>
    <MdEmail
      className={`
        icon self-center text-white
        transition-colors duration-500 group-hover:text-black
      `}
      style={{ height: size || 80, width: size || 80 }}
    />
  </HeaderIconContainer>
);

export { ContactIcon };
