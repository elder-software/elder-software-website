import React from 'react';
import { GiWaveSurfer } from 'react-icons/gi';
import { iconStyles } from './styles';

const SurfSkateIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <GiWaveSurfer style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
    </div>
  );
}

export { SurfSkateIcon };
