import React from 'react';
import { FaJava } from 'react-icons/fa';
import { iconStyles, TechIconProps } from './styles';

const JavaIcon: React.FC<TechIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <FaJava
      style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
    />
    <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>Java</h5>
  </div>
);

export { JavaIcon };