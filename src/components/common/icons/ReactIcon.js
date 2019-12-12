import React from 'react';
import { FaReact } from 'react-icons/fa';
import { iconStyles } from './styles';

const ReactIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaReact style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
      <h5 style={{ margin: 0 }}>React Native</h5>
    </div>
  );
}

export { ReactIcon };