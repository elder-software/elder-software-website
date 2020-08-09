import React from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import './index.css';

const LinkedInSmallIcon: React.FC = () => (
  <a
    href="https://www.linkedin.com/in/james-elder-8a335119a/"
    target="_blank"
    rel="noopener noreferrer">
    <div className={'iconContainer'}>
      <TiSocialLinkedinCircular className={'liIcon'}/>
    </div>
  </a>
);

export { LinkedInSmallIcon };
