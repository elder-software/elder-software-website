import React from 'react';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const LinkedInSmallIcon: React.FC = () => (
  <a
    href="https://www.linkedin.com/in/james-elder-8a335119a/"
    target="_blank"
    rel="noopener noreferrer">
    <TiSocialLinkedinCircular
      style={styles.linkedInIconStyle}
    />
  </a>
);

const styles = {
  linkedInIconStyle: {
    flex: 1,
    height: 40,
    width: 40,
    backgroundColor: 'black',
    color: 'white',
  } as React.CSSProperties
}

export { LinkedInSmallIcon };
