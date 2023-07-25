import React from 'react';
import { MdComputer } from 'react-icons/md';
import { iconStyles, AboutIconProps } from './styles';

const ComputerIcon: React.FC<AboutIconProps> = ({
  size,
  onMouseEnter,
  onMouseLeave,
  isFocused
}) => (
  <div
    style={iconStyles.iconContainerStyle}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <MdComputer
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80,
        opacity: isFocused ? 1.0 : 0.5
      }}
    />
  </div>
);

export { ComputerIcon };
