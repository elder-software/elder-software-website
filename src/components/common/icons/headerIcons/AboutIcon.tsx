import React from 'react';
import { MdInfo } from 'react-icons/md';
import { HeaderIconProps } from './styles';
import { Link } from 'react-router-dom';
import './index.css';

const AboutIcon: React.FC<HeaderIconProps> = ({ size }) => (
  <Link to={'/about'}>
    <div className={'iconBackground'}>
      <MdInfo
        className={'icon'}
        style={{
          height: size ? size : 80,
          width: size ? size : 80,
        }}
      />
      <h5 className={'iconText'}>
        Info
      </h5>
    </div>
  </Link>
);

export { AboutIcon };
