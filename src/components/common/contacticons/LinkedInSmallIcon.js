import React from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const LinkedInSmallIcon = () => {
  return (
    <a
      href="https://www.linkedin.com/in/james-elder-8a335119a/"
      target="_blank"
      rel="noopener noreferrer">
      <TiSocialLinkedinCircular style={{
        flex: 1,
        height: 40,
        width: 40,
        backgroundColor: 'black',
        color: 'white',
      }} />
    </a>
  );
}

export { LinkedInSmallIcon };
