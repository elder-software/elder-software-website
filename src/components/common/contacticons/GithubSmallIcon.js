import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GithubSmallIcon = ({ colour }) => {
  return (
    <a
      href="https://github.com/elder-software"
      target="_blank"
      rel="noopener noreferrer">
      <FaGithub style={{
        width: 30,
        height: 30,
        color: colour ? colour : 'white',
        margin: 10,
        backgroundColor: 'black'
      }} />
    </a>
  );
}

export { GithubSmallIcon };
