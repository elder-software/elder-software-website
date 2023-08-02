import React from 'react';
import { FaTv } from 'react-icons/fa';
import { iconStyles } from './styles';

const TvIcon: React.FC = () => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaTv
        style={{
          ...iconStyles.iconStyle,
          height: 80,
          width: 80
        }}
      />
      <h5 style={{ margin: 0, fontSize: 15 }}>TV</h5>
    </div>
  );
};

export { TvIcon };
