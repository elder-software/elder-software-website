import React from 'react';
import { GoCircleSlash } from 'react-icons/go';
import { iconStyles, AboutIconProps } from './styles';

const CircuitBoardAboutIcon: React.FC<AboutIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <GoCircleSlash
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
    />
  </div>
);

export { CircuitBoardAboutIcon };
