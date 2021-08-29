import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './index.css';

const GithubSmallIcon: React.FC = () => (
  <a
    href="https://github.com/elder-software"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="iconContainer">
      <FaGithub className="icon" />
    </div>
  </a>
);

export { GithubSmallIcon };
