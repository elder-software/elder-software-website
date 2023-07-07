import React from 'react';
import { MdInfo } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { HeaderIconProps } from './styles';
import './index.css';

const AboutIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link to="/about">
    <div className="iconBackground">
      <MdInfo
        className="icon"
        style={{
          height: size || 80,
          width: size || 80
        }}
      />
      <h5 className="iconText" style={{ fontSize: textSize }}>
        Info
      </h5>
    </div>
  </Link>
);

export { AboutIcon };
