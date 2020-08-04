import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { iconStyles, TechIconProps } from '../techicons/styles';

const AboutIcon: React.FC<TechIconProps> = ({ size }) => (
  <div style={iconStyles.iconContainerStyle}>
    <BsFillInfoCircleFill
      style={{
        ...styles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
    />
    <h5 style={{
      margin: 0,
      fontSize: size === 30 ? 8 : 15,
      color: 'white'
    }}
    >
      About
    </h5>
  </div>
);

const styles = {
  iconStyle: {
    padding: '5%',
    color: 'white',
    borderRadius: '15%',
  } as React.CSSProperties
}

export { AboutIcon };