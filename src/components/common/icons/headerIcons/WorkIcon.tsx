import React from 'react';
import { MdWork } from 'react-icons/md';
import { HeaderIconProps } from './styles';
import { Link } from 'react-router-dom';
import './index.css';

const WorkIcon: React.FC<HeaderIconProps> = ({ size, textSize }) => (
  <Link to={'/work'}>
    <div className={'iconBackground'}>
      <MdWork
        className={'icon'}
        style={{
          height: size || 80,
          width: size || 80,
        }}
      />
      <h5 className={'iconText'} style={{ fontSize: textSize }}>
        Work
      </h5>
    </div>
  </Link>
);

export { WorkIcon };