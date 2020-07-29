import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import { iconStyles, IconProps } from './styles';

const AndroidIcon: React.FC<IconProps> = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaAndroid
        style={{
          ...iconStyles.iconStyle,
          height: size ? size : 80,
          width: size ? size : 80
        }}
      />
      <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>Android</h5>
    </div>
  );
}

export { AndroidIcon };
