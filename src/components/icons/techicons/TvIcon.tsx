import React from 'react';
import { FaTv } from 'react-icons/fa';
import { iconStyles } from './styles';

interface TvIconProps {
  size?: number;
}

const TvIcon: React.FC<TvIconProps> = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaTv
        style={{
          ...iconStyles.iconStyle,
          height: size ? size : 80,
          width: size ? size : 80
        }}
      />
      <h5 style={{ margin: 0, fontSize: 15 }}>TV</h5>
    </div>
  );
};

export { TvIcon };
