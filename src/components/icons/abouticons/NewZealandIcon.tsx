import React, { useState } from 'react';
import NZIcon from '../../../assets/icons/NewZealandIcon.png';
import { iconStyles, AboutIconProps } from './styles';

const NewZealandIcon: React.FC<AboutIconProps> = ({ size, onMouseEnter }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={iconStyles.iconContainerStyle}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        style={{
          ...iconStyles.iconStyle,
          height: size || 80,
          width: size || 80,
          opacity: isHovered ? 1.0 : 0.5
        }}
        src={NZIcon}
        alt="NewZealand"
      />
    </div>
  );
};

export { NewZealandIcon };
