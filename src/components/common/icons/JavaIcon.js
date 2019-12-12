import React from 'react';
import { FaJava } from 'react-icons/fa';
import { iconStyles } from './styles';

const JavaIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaJava style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
      <h5 style={{ margin: 0 }}>Java</h5>
    </div>
  );
}

export { JavaIcon };