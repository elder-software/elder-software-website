import React from 'react';
import {
  NewZealandIcon,
  CertificateIcon,
  MusicIcon,
  SurfSkateIcon
} from '../../components/icons/abouticons';
import { AndroidIcon } from '../../components/icons/techicons';
import './aboutPersonal.css';

const HomeAboutSection: React.FC = () => {
  const [infoText, setInfoText] = React.useState(text[0]);
  const [focusedIcon, setFocusedIcon] = React.useState(0);
  const [iconIsHovered, setIconIsHovered] = React.useState(false);

  /* const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);
  const resize = () => setIsMobile(window.innerWidth <= 1000); */

  const onMouseEnter = (text: string, iconIndex: number) => {
    setIconIsHovered(true);
    setInfoText(text);
    setFocusedIcon(iconIndex);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!iconIsHovered) {
        setFocusedIcon((focusedIcon + 1) % 5);
      }
    }, 4000);
    if (!iconIsHovered) {
      setInfoText(text[focusedIcon]);
    }
    return () => clearInterval(interval);
  }, [focusedIcon, iconIsHovered]);

  return (
    <div style={styles.mainDiv}>
      <div style={styles.infoDiv}>
        <div style={styles.allIconsContainer}>
          <NewZealandIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[0], 0)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 0}
          />
          <AndroidIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[1], 1)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 1}
            showLabel={false}
          />
          <CertificateIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[2], 2)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 2}
          />
          <MusicIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[3], 3)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 3}
          />
          <SurfSkateIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[4], 4)}
            onMouseLeave={() => setIconIsHovered(false)}
            isFocused={focusedIcon === 4}
          />
        </div>

        <div style={{ ...styles.rowTextStyle }}>
          <p key={infoText} className="fade-in-out">
            {infoText}
          </p>
        </div>
      </div>
    </div>
  );
};

const text = [
  'New Zealand, Mount Maunganui is where I was born and raised.',
  'I am an Android developer with 6 years experience working on a variety of products in many sectors.',
  'I studied Electrical and Electronic Engineering and obtained a BEng ' +
    '(Honours) from the University of Canterbury. I directed my course to ' +
    'have a heavy focus on programming and embedded systems.',
  'I have played music since a young age, competent at guitar, vocals and drums. I have a ' +
    'lot of experience composing and performing with bands and by myself.',
  'Growing up close to the beach has resulted in surfing and skateboarding ' +
    'being my favourite sports.'
];

const styles = {
  mainDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 10
  } as React.CSSProperties,
  infoDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '0px solid #f2f2f2',
    marginTop: 0,
    borderRadius: 15,
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    background: 'white'
  } as React.CSSProperties,
  allIconsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 54
  } as React.CSSProperties,
  rowTextStyle: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'lighter',
    opacity: '80%',
    margin: 50,
    minHeight: 200,
    transition: 'opacity 1.0s ease'
  } as React.CSSProperties,
  infoTextStyle: {
    fontSize: 20,
    opacity: '80%',
    textAlign: 'center',
    transition: 'opacity 1.0s ease'
  } as React.CSSProperties,
  icon: {
    size: 80
  }
};

export default HomeAboutSection;
