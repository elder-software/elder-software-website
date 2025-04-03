import React from "react";
import { MdContactMail } from "react-icons/md";
import { HeaderIconContainer, HeaderIconProps } from "./HeaderIconContainer";

const ContactIcon: React.FC<HeaderIconProps> = ({ size, textSize, isActive }) => (
  <HeaderIconContainer
    text="Contact"
    icon={MdContactMail}
    size={size}
    textSize={textSize}
    isActive={isActive}
  />
);

export { ContactIcon };
