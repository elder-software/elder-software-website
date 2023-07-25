import React from 'react';
import { FaMusic } from 'react-icons/fa';
import { iconStyles, AboutIconProps } from './styles';

const MusicIcon: React.FC<AboutIconProps> = ({
  size,
  onMouseEnter,
  onMouseLeave,
  isFocused
}) => (
  <div
    style={iconStyles.iconContainerStyle}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <FaMusic
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80,
        opacity: isFocused ? 1.0 : 0.5
      }}
    />
  </div>
);

export { MusicIcon };
