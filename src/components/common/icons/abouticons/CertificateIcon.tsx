import React from 'react';
import { GiDiploma } from 'react-icons/gi';
import { iconStyles, AboutIconProps } from './styles';

const CertificateIcon: React.FC<AboutIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <GiDiploma
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
    />
  </div>
);

export { CertificateIcon };
