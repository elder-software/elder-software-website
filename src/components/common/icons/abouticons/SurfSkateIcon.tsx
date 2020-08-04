import React from 'react';
import { GiWaveSurfer } from 'react-icons/gi';
import { iconStyles, AboutIconProps } from './styles';

const SurfSkateIcon: React.FC<AboutIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <GiWaveSurfer style={{
      ...iconStyles.iconStyle,
      height: size ? size : 80,
      width: size ? size : 80
    }} />
  </div>
);

export { SurfSkateIcon };
