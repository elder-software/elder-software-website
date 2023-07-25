import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import { iconStyles, TechIconProps } from './styles';

const AndroidIcon: React.FC<TechIconProps> = ({
  size,
  fontSize,
  onMouseEnter,
  onMouseLeave,
  isFocused,
  showLabel = true
}) => (
  <div
    style={iconStyles.iconContainerStyle}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <FaAndroid
      style={{
        ...iconStyles.iconStyle,
        height: size || 80,
        width: size || 80,
        opacity: isFocused ? 1.0 : 0.5
      }}
    />
    {showLabel && (
      <h5 style={{ margin: 0, fontSize: fontSize || 15 }}>Android</h5>
    )}
  </div>
);

export { AndroidIcon };
