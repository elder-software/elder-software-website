import React from 'react';
import { GiDiploma } from 'react-icons/gi';
import { iconStyles, AboutIconProps } from './styles';

const CertificateIcon: React.FC<AboutIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <GiDiploma
      style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
    />
  </div>
);

export { CertificateIcon };
