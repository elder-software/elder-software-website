import React from 'react';
import { TbPackages } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { HeaderIconProps } from './styles';
import './index.css';

const ProductsIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link to="/about">
    <div className="iconBackground">
      <TbPackages
        className="icon"
        style={{
          height: size || 80,
          width: size || 80
        }}
      />
      <h5 className="iconText" style={{ fontSize: textSize }}>
        Products
      </h5>
    </div>
  </Link>
);

export { ProductsIcon };
