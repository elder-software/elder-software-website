import React from 'react';
import { MdComputer } from 'react-icons/md';
import { iconStyles, AboutIconProps } from './styles';

const ComputerIcon: React.FC<AboutIconProps> = ({ size, onMouseEnter }) => (
  <div style={iconStyles.iconContainerStyle} onMouseEnter={onMouseEnter}>
    <MdComputer
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
    />
  </div>
);

export { ComputerIcon };
