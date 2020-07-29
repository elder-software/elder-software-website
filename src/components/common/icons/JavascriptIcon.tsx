import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { iconStyles, TechIconProps } from './styles';

const JavascriptIcon: React.FC<TechIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <IoLogoJavascript
      style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
    />
    <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>Javascript</h5>
  </div>
);


export { JavascriptIcon };