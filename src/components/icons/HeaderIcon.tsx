import React from "react";
import { IconType } from "react-icons";

interface HeaderIconContainerProps {
  text: string;
  textSize?: number;
  icon: IconType;
  iconProps?: React.ComponentProps<IconType>;
  size?: number;
  isActive?: boolean;
}

export interface HeaderIconProps {
  size?: number;
  textSize?: number;
  isActive?: boolean;
}

export const HeaderIcon: React.FC<HeaderIconContainerProps> = ({
  text,
  textSize,
  icon: IconComponent,
  iconProps,
  size,
  isActive,
}) => {
  const iconSize = size || 80;
  const commonIconClassName = `
    icon self-center
    transition-colors duration-500 group-hover:text-blue-700
    ${isActive ? "text-blue-700" : "text-white"}
  `;

  return (
    <div
      className={`
        group flex flex-col items-center content-center text-center
        rounded px-2.5 py-1
        transition-colors duration-500 hover:bg-white
        ${isActive ? "bg-white" : "bg-blue-700"}
      `}
    >
      <IconComponent
        className={`${commonIconClassName} ${iconProps?.className || ""}`}
        style={{ height: iconSize, width: iconSize, ...iconProps?.style }}
        {...iconProps}
      />
      <h5
        className={`
          iconText m-0 p-0 border-0
          transition-colors duration-500 group-hover:text-blue-700
          ${isActive ? "text-blue-700" : "text-white"}
        `}
        style={{ fontSize: textSize }}
      >
        {text}
      </h5>
    </div>
  );
};
