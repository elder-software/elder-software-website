import React from 'react';
import { TiHome } from 'react-icons/ti';
import { headerIconStyles, HeaderIconProps } from './styles';

const HomeIcon: React.FC<HeaderIconProps> = ({ size }) => (
  <div style={headerIconStyles.iconContainerStyle}>
    <TiHome
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
      Home
    </h5>
  </div>
);

export { HomeIcon };