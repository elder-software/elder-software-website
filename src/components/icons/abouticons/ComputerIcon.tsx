import React, { useState } from 'react';
import { MdComputer } from 'react-icons/md';
import { iconStyles, AboutIconProps } from './styles';

const ComputerIcon: React.FC<AboutIconProps> = ({ size, onMouseEnter }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={iconStyles.iconContainerStyle}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MdComputer
        style={{
          ...iconStyles.iconStyle,
          height: size || 80,
          width: size || 80,
          opacity: isHovered ? 1.0 : 0.5
        }}
      />
    </div>
  );
};

export { ComputerIcon };
