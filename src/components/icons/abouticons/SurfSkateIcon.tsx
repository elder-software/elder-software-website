import React from 'react';
import { GiWaveSurfer } from 'react-icons/gi';
import { iconStyles, AboutIconProps } from './styles';

const SurfSkateIcon: React.FC<AboutIconProps> = ({ size, onMouseEnter }) => (
  <div style={iconStyles.iconContainerStyle} onMouseEnter={onMouseEnter}>
    <GiWaveSurfer
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
    />
  </div>
);

export { SurfSkateIcon };
