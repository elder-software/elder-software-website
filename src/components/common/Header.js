import React from 'react';
import TextHeading from './TextHeading';
import Logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'center', margin: 30 }}>
        <img style={{ width: 200 }} src={Logo} alt={'something'} />
      </div>

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
    </div>
  );
}

export default Header;