import React from 'react';
import TextHeading from './TextHeading';
import Logo from '../assets/logo.jpg';

const Header = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'center', padding: 30 }}>
        <img style={{ width: 200, height: "100%" }} src={Logo} alt={'something'}  />
      </div>

      <div style={{
        display: 'flex',
        paddingTop: 5,
        paddingBottom: 5,
        border: '1px solid black',
        borderRadius: 15,
        marginRight: 30,
        marginLeft: 30,
        background: 'black',
        webkitBoxShadow: "2px 2px 2px #DFDFDF",
        mozBoxShadow: "2px 2px 2px #DFDFDF",
        boxShadow: "2px 2px 2px #DFDFDF"
      }}>
        <TextHeading
          text={'Home'}
          linkRef={''}
        />
        <TextHeading
          text={'Work'}
          linkRef={'work'}
        />
        <TextHeading
          text={'About'}
          linkRef={'about'}
        />
        <TextHeading
          text={'Contact'}
          linkRef={'contact'}
        />
      </div>
    </div>
  );
}

export default Header;