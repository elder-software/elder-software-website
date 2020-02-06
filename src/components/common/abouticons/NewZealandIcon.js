import React from 'react';
import CPlusPlus from '../../assets/icons/NewZealandIcon.png';
import { iconStyles } from './styles';

const NewZealandIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <img style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
        src={CPlusPlus}
        alt={'NewZealand'}
      />
    </div>
  );
}

export { NewZealandIcon };