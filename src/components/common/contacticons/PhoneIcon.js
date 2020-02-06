import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { iconStyles } from './styles';

const PhoneIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaPhone style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
    </div>
  );
}

export { PhoneIcon };
