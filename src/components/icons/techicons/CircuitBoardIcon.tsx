import React from 'react';
import { GoCircle } from 'react-icons/go';
import { iconStyles, TechIconProps } from './styles';

const CircuitBoardIcon: React.FC<TechIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <GoCircle
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80,
        padding: '5%'
      }}
    />
    <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>Embedded</h5>
  </div>
);

export { CircuitBoardIcon };
