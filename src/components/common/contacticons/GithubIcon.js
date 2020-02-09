import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { iconStyles } from './styles';

const GithubIcon = ({ size }) => {
  return (
    <div style={iconStyles.iconContainerStyle}>
      <FaGithub style={{
        ...iconStyles.iconStyle,
        height: size ? size : 80,
        width: size ? size : 80,
      }} />
    </div>
  );
}

export { GithubIcon };
