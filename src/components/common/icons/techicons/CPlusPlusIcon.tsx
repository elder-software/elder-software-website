import React from 'react';
import { iconStyles, TechIconProps } from './styles';

const CPlusPlusIcon: React.FC<TechIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <img
      style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
      src={require('../../../assets/technologiesLogos/CPlusPlus.png')}
      alt={'CPlusPlus'}
    />
    <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>C++</h5>
  </div>
);

export { CPlusPlusIcon };