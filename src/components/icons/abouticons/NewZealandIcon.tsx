import React from "react";
import { iconStyles, AboutIconProps } from "./styles";
import Image from "next/image";

const NewZealandIcon: React.FC<AboutIconProps> = ({
  size,
  onMouseEnter,
  onMouseLeave,
  isFocused,
}) => {
  return (
    <div
      style={iconStyles.iconContainerStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        style={{
          ...iconStyles.iconStyle,
          height: size || 80,
          width: size || 80,
          opacity: isFocused ? 1.0 : 0.5,
        }}
        src={"/icons/NewZealandIcon.png"}
        alt="NewZealand"
        width={size || 80}
        height={size || 80}
      />
    </div>
  );
};

export { NewZealandIcon };
