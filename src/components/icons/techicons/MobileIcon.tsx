import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { iconStyles } from './styles';

interface TvIconProps {
  size?: number;
}

const MobileIcon: React.FC<TvIconProps> = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaMobileAlt
        style={{
          ...iconStyles.iconStyle,
          height: size ? size : 80,
          width: size ? size : 80
        }}
      />
      <h5 style={{ margin: 0, fontSize: 15 }}>Mobile</h5>
    </div>
  );
};

export { MobileIcon };
