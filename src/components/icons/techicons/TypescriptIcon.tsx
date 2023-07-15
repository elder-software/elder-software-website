import React from 'react';
import { SiTypescript } from 'react-icons/si';
import { iconStyles, TechIconProps } from './styles';

const TypescriptIcon: React.FC<TechIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <SiTypescript
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80
      }}
    />
    <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>Typescript</h5>
  </div>
);

export { TypescriptIcon };
