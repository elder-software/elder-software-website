import React from 'react';
import { FaApple } from 'react-icons/fa';
import { iconStyles } from './styles';

const AppleIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaApple style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
      <h5 style={{ margin: 0 }}>Apple/iOS</h5>
    </div>
  );
}

export { AppleIcon };
