import React, { useState } from 'react';
import { GiDiploma } from 'react-icons/gi';
import { iconStyles, AboutIconProps } from './styles';

const CertificateIcon: React.FC<AboutIconProps> = ({
  size,
  onMouseEnter,
  isFocused
}) => {
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
      <GiDiploma
        style={{
          ...iconStyles.iconStyle,
          height: size || 80,
          width: size || 80,
          opacity: isHovered || isFocused ? 1.0 : 0.5
        }}
      />
    </div>
  );
};

export { CertificateIcon };
