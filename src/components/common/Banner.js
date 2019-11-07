import React from 'react';
import TextHeading from './TextHeading';

const Banner = () => {
  return (
    <div style={{
      display: 'flex',
      paddingTop: 5,
      paddingBottom: 5,
      borderTop: '1px solid black',
      borderBottom: '1px solid black'
    }}>
      <TextHeading
        text={'HOME'}
        linkRef={''}
      />
      <TextHeading
        text={'WORK'}
        linkRef={'work'}
      />
      <TextHeading
        text={'ABOUT'}
        linkRef={'about'} 
      />
    </div>
  );
}

export default Banner;