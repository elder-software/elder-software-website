import React from "react";

interface HeaderIconContainerProps {
  text: string;
  textSize?: number;
  children: React.ReactNode;
  isActive?: boolean;
}

export interface HeaderIconProps {
    size?: number;
    textSize?: number;
    isActive?: boolean;
  }

const HeaderIconContainer: React.FC<HeaderIconContainerProps> = ({
  text,
  textSize,
  children,
  isActive,
}) => (
  <div
    className={`
      group flex flex-col items-center content-center text-center
      rounded px-2.5 py-1
      transition-colors duration-500 hover:bg-white
      ${isActive ? 'bg-white' : 'bg-black'}
    `}
  >
    {children}
    <h5
      className={`
        iconText m-0 p-0 border-0
        transition-colors duration-500 group-hover:text-black
        ${isActive ? 'text-black' : 'text-white'}
      `}
      style={{ fontSize: textSize }}
    >
      {text}
    </h5>
  </div>
);

export { HeaderIconContainer };
