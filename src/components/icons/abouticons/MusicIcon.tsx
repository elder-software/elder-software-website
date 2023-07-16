import React from 'react';
import { FaMusic } from 'react-icons/fa';
import { iconStyles, AboutIconProps } from './styles';

const MusicIcon: React.FC<AboutIconProps> = ({ size, onMouseEnter }) => (
  <div style={iconStyles.iconContainerStyle} onMouseEnter={onMouseEnter}>
    <FaMusic
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
    />
  </div>
);

export { MusicIcon };
