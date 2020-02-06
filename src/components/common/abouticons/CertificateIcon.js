import React from 'react';
import { GiDiploma } from 'react-icons/gi';
import { iconStyles } from './styles';

const CertificateIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <GiDiploma style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
    </div>
  );
}

export { CertificateIcon };
