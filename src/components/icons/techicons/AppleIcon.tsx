import React from 'react';
import { FaApple } from 'react-icons/fa';
import { iconStyles, TechIconProps } from './styles';

const AppleIcon: React.FC<TechIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <FaApple
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
    />
    <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>iOS</h5>
  </div>
);

export { AppleIcon };
