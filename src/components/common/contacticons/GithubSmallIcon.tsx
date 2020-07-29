import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ContactIconProps } from './styles';

const GithubSmallIcon: React.FC<ContactIconProps> = ({ colour }) => (
  <a
    href="https://github.com/elder-software"
    target="_blank"
    rel="noopener noreferrer">
    <FaGithub
      style={{
        ...styles.githubIconStyle,
        color: colour ? colour : 'white',
      }}
    />
  </a>
);

const styles = {
  githubIconStyle: {
    width: 30,
    height: 30,
    margin: 10,
    backgroundColor: 'black'
  } as React.CSSProperties
}

export { GithubSmallIcon };
