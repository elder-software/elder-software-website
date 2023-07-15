import React from 'react';
import Logo from '../../assets/logo.jpeg';
import {
  AboutIcon,
  HomeIcon,
  ContactIcon,
  WorkIcon
} from '../icons/headerIcons';

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);

  const resize = () => setIsMobile(window.innerWidth <= 1000);

  return (
    <div>
      <div style={styles.logoDiv}>
        <img
          style={{ width: isMobile ? '25%' : '12%', height: '100%' }}
          src={Logo}
          alt="logo"
        />
      </div>

      <div style={styles.headingsDiv}>
        <HomeIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <WorkIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <AboutIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
        <ContactIcon size={isMobile ? 15 : 23} textSize={isMobile ? 6 : 10} />
      </div>
    </div>
  );
};

const styles = {
  logoDiv: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    margin: '4%'
  } as React.CSSProperties,
  headingsDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '1%',
    paddingBottom: '1%',
    border: '1px solid black',
    borderRadius: 15,
    marginRight: 5,
    marginLeft: 5,
    background: 'black',
    WebkitBoxShadow: '2px 2px 2px #DFDFDF',
    MozBoxShadow: '2px 2px 2px #DFDFDF',
    boxShadow: '2px 2px 2px #DFDFDF'
  } as React.CSSProperties
};

export default Header;
