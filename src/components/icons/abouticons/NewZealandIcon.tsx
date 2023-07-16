import React from 'react';
import NZIcon from '../../../assets/icons/NewZealandIcon.png';
import { iconStyles, AboutIconProps } from './styles';

const NewZealandIcon: React.FC<AboutIconProps> = ({ size, onMouseEnter }) => (
  <div style={iconStyles.iconContainerStyle} onMouseEnter={onMouseEnter}>
    <img
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
      src={NZIcon}
      alt="NewZealand"
    />
  </div>
);

export { NewZealandIcon };
