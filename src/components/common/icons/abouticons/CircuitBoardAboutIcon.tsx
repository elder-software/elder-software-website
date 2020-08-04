import React from 'react';
import { GoCircuitBoard } from 'react-icons/go';
import { iconStyles, AboutIconProps } from './styles';

const CircuitBoardAboutIcon: React.FC<AboutIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <GoCircuitBoard
      style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
    />
  </div>
);

export { CircuitBoardAboutIcon };