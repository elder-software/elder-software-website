import React from 'react';
import NZIcon from '../../../assets/icons/NewZealandIcon.png';
import { iconStyles, AboutIconProps } from './styles';

const NewZealandIcon: React.FC<AboutIconProps> = ({
  size,
  onMouseEnter,
  onMouseLeave,
  isFocused
}) => {
  return (
    <div
      style={iconStyles.iconContainerStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        style={{
          ...iconStyles.iconStyle,
          height: size || 80,
          width: size || 80,
          opacity: isFocused ? 1.0 : 0.5
        }}
        src={NZIcon}
        alt="NewZealand"
      />
    </div>
  );
};

export { NewZealandIcon };
