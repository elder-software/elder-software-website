import React from 'react';
import { FaApple } from 'react-icons/fa';
import { iconStyles, IconProps } from './styles';

const AppleIcon: React.FC<IconProps> = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaApple style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
      <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>iOS</h5>
    </div>
  );
}

export { AppleIcon };
