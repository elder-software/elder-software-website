import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { iconStyles } from './styles';

const MobileIcon: React.FC = () => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaMobileAlt
        style={{
          ...iconStyles.iconStyle
        }}
      />
      <h5 style={{ margin: 0, fontSize: 15 }}>Mobile</h5>
    </div>
  );
};

export { MobileIcon };
