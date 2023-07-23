import React from 'react';
import {
  NewZealandIcon,
  CertificateIcon,
  MusicIcon,
  SurfSkateIcon,
  ComputerIcon
} from '../../components/icons/abouticons';
// import { AndroidIcon, AppleIcon } from '../../components/icons/techicons';

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

  const onMouseEnter = (text: string) => {
    setIconIsHovered(true);
    setInfoText(text);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFocusedIcon((focusedIcon + 1) % 5);
    }, 2000);
    setInfoText(text[focusedIcon]);
    return () => clearInterval(interval);
  }, [focusedIcon]);

  return (
    <div style={styles.mainDiv}>
      <div style={styles.infoDiv}>
        <div style={styles.allIconsContainer}>
          {/* <AndroidIcon size={styles.icon.size} />
          <AppleIcon size={isMobile ? 30 : styles.icon.size} /> */}
          <NewZealandIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[0])}
            isFocused={focusedIcon === 0 && !iconIsHovered}
          />
          <CertificateIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[1])}
            isFocused={focusedIcon === 1 && !iconIsHovered}
          />
          <ComputerIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[2])}
            isFocused={focusedIcon === 2 && !iconIsHovered}
          />
          <MusicIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[3])}
            isFocused={focusedIcon === 3 && !iconIsHovered}
          />
          <SurfSkateIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text[4])}
            isFocused={focusedIcon === 4 && !iconIsHovered}
          />
        </div>

        <div style={{ ...styles.rowTextStyle }}>
          <body style={styles.infoTextStyle}>{infoText}</body>
        </div>
      </div>
    </div>
  );
};

const text = [
  'New Zealand, Mount Maunganui is where I was born and raised.',
  'I studied Electrical and Electronic Engineering and obtained a BEng ' +
    '(Honours) from the University of Canterbury. I directed my course to' +
    ' have a heavy focus on programming and embedded systems.',
  'Using the skills I developed from my degree and previous work I ' +
    'learnt how to develop mobile applications and have been freelancing ' +
    'this work since.',
  'I have played music since a young age, starting on the piano and ' +
    'moving on to the guitar, vocals and drums at a later age. I have a ' +
    'lot of experience composing and performing with bands and by myself.',
  'Growing up close to the beach has resulted in surfing and skateboard' +
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
    transition: 'opacity 0.3s ease' /* Adjust the duration as needed */
  } as React.CSSProperties,
  infoTextStyle: {
    fontSize: 20,
    opacity: '80%',
    textAlign: 'center'
  } as React.CSSProperties,
  icon: {
    size: 80
  }
};

export default HomeAboutSection;
