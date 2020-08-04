import React from 'react';
import { FaReact } from 'react-icons/fa';
import { iconStyles, TechIconProps } from './styles';

const ReactIcon: React.FC<TechIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <FaReact style={{
      ...iconStyles.iconStyle,
      height: size ? size : 80,
      width: size ? size : 80
    }} />
    <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>React Native</h5>
  </div>
);

export { ReactIcon };