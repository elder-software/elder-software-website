import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { iconStyles } from './styles';

const JavascriptIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <IoLogoJavascript style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
      <h5 style={{ margin: 0 }}>Javascript</h5>
    </div>
  );
}

export { JavascriptIcon };