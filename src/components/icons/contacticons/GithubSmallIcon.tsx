import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GithubSmallIcon: React.FC = () => (
  <a
    href="https://github.com/elder-software"
    target="_blank"
    rel="noopener noreferrer"
    className="group block w-[30px] h-[30px] rounded-full m-[3px] bg-black transition-colors duration-1000 hover:bg-white"
  >
    <FaGithub className="w-[30px] h-[30px] text-white transition-colors duration-1000 group-hover:text-black" />
  </a>
);

export { GithubSmallIcon };
