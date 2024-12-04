import React from 'react';
import { GiWaveSurfer } from 'react-icons/gi';
import { iconStyles, AboutIconProps } from './styles';

const SurfSkateIcon: React.FC<AboutIconProps> = ({
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
    <GiWaveSurfer
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80,
        opacity: isFocused ? 1.0 : 0.5
      }}
    />
  </div>
);

export { SurfSkateIcon };
