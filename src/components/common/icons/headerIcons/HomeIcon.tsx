import React from 'react';
import { TiHome } from 'react-icons/ti';
import { HeaderIconProps } from './styles';
import { Link } from 'react-router-dom';
import './index.css';

const HomeIcon: React.FC<HeaderIconProps> = ({ size }) => {
  return (
    <div className={'iconBackground'}>
      <Link to={''}>
          <TiHome
            className={'icon'}
            style={{
              height: size ? size : 80,
              width: size ? size : 80,
            }}
          />
          <div className={'iconText'}>
            Home
          </div>
      </Link>
    </div>
  );
};

export { HomeIcon };