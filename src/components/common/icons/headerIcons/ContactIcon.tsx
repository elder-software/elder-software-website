import React from 'react';
import { MdEmail } from 'react-icons/md';
import { HeaderIconProps, headerIconStyles } from './styles';

const ContactIcon: React.FC<HeaderIconProps> = ({ size }) => (
  <div style={headerIconStyles.iconContainerStyle}>
    <MdEmail
      style={{
        ...headerIconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
    />
    <h5
      style={{
        margin: 0,
        fontSize: 10,
        color: 'white'
      }}
    >
      Contact
    </h5>
  </div>
);

export { ContactIcon };
