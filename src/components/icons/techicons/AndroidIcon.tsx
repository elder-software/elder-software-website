import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import { iconStyles, TechIconProps } from './styles';

const AndroidIcon: React.FC<TechIconProps> = ({ size, fontSize }) => (
  <div style={iconStyles.iconContainerStyle}>
    <FaAndroid
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
    />
    <h5 style={{ margin: 0, fontSize: fontSize || 15 }}>Android</h5>
  </div>
);

export { AndroidIcon };
