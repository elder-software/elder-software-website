import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HeaderIconProps } from './styles';
import './index.css';

const HomeIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link to="/">
    <div className="iconBackground">
      <FaUser
        className="icon"
        style={{
          height: size || 80,
          width: size || 80
        }}
      />
      <h5 className="iconText" style={{ fontSize: textSize }}>
        Home
      </h5>
    </div>
  </Link>
);

export { HomeIcon };
