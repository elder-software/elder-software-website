import React from 'react';
import { MdWork } from 'react-icons/md';
import { HeaderIconProps, headerIconStyles } from './styles';

const WorkIcon: React.FC<HeaderIconProps> = ({ size }) => (
  <div style={headerIconStyles.iconContainerStyle}>
    <MdWork
      style={{
        ...headerIconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80
      }}
    />
    <h5
      style={{
        margin: 0,
        fontSize: 10,
        color: 'white'
      }}
    >
      Work
    </h5>
  </div>
);

export { WorkIcon };