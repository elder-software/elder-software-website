import React from 'react';
import { FaMusic } from 'react-icons/fa';
import { iconStyles } from './styles';

const MusicIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaMusic style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
    </div>
  );
}

export { MusicIcon };
