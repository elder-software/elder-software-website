import React from 'react';
import { GoCircuitBoard } from 'react-icons/go';
import { iconStyles } from './styles';

const CircuitBoardIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <GoCircuitBoard style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80,
        padding: '5%'
      }} />
      <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>Embedded</h5>
    </div>
  );
}

export { CircuitBoardIcon };