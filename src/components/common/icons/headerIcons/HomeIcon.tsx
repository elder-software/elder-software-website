import React from 'react';
import { TiHome } from 'react-icons/ti';
import { HeaderIconProps } from './styles';
import { Link } from 'react-router-dom';
import './index.css';

const HomeIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link to={''}>
    <div className={'iconBackground'}>
      <TiHome
        className={'icon'}
        style={{
          height: size || 80,
          width: size || 80,
        }}
      />
      <h5 className={'iconText'} style={{ fontSize: textSize }}>
        Home
      </h5>
    </div>
  </Link>
);

export { HomeIcon };
