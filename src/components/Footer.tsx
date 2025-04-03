import React from 'react';
import { GithubSmallIcon, LinkedInSmallIcon } from './icons/contacticons';

const Footer: React.FC = () => (
  <div className="flex flex-1 flex-row py-[1%] border border-black rounded-[15px] bg-black opacity-85 shadow-md mx-5 my-2.5 items-center">
    <div className="flex items-center flex-1 justify-center">
      <div className="flex flex-col text-white p-2.5 text-xs text-center">
        <div>Website created using ReactJS</div>
        <div>Code available on GitHub</div>
      </div>
      <div className="flex flex-row items-center p-2.5">
        <GithubSmallIcon />
        <LinkedInSmallIcon />
      </div>
    </div>
  </div>
);

export default Footer;
