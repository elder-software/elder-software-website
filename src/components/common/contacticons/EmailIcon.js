import React from 'react';
import { MdEmail } from 'react-icons/md';
import { iconStyles } from './styles';

const EmailIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <MdEmail style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
    </div>
  );
}

export { EmailIcon };
