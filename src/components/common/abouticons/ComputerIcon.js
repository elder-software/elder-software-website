import React from 'react';
import { MdComputer } from 'react-icons/md';
import { iconStyles } from './styles';

const ComputerIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <MdComputer style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }} />
    </div>
  );
}

export { ComputerIcon };
