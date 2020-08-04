import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { headerIconStyles, HeaderIconProps } from './styles';

const AboutIcon: React.FC<HeaderIconProps> = ({ size }) => (
  <div style={headerIconStyles.iconContainerStyle}>
    <BsFillInfoCircleFill
      style={{
        ...headerIconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
    />
    <h5 style={{
      margin: 0,
      fontSize: 10,
      color: 'white'
    }}
    >
      About
    </h5>
  </div>
);

export { AboutIcon };