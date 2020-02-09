import React from 'react';
import CPlusPlus from '../../assets/technologiesLogos/CPlusPlus.png';
import { iconStyles } from './styles';

const CPlusPlusIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <img style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
        src={CPlusPlus}
        alt={'CPlusPlus'}
      />
      <h5 style={{ margin: 0, fontSize: size === 30 ? 8 : 15 }}>C++</h5>
    </div>
  );
}

export { CPlusPlusIcon };