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
  const [infoText, setInfoText] = React.useState(text.newZealand);

  /* const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);
  const resize = () => setIsMobile(window.innerWidth <= 1000); */

  const onMouseEnter = (text: string) => {
    setInfoText(text);
  };

  return (
    <div style={styles.mainDiv}>
      <div style={styles.infoDiv}>
        <div style={styles.allIconsContainer}>
          {/* <AndroidIcon size={styles.icon.size} />
          <AppleIcon size={isMobile ? 30 : styles.icon.size} /> */}
          <NewZealandIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text.newZealand)}
          />
          <CertificateIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text.studies)}
          />
          <ComputerIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text.mobileDevWork)}
          />
          <MusicIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text.music)}
          />
          <SurfSkateIcon
            size={styles.icon.size}
            onMouseEnter={() => onMouseEnter(text.mobileDevWork)}
          />
        </div>

        <div style={{ ...styles.rowTextStyle }}>
          <body style={styles.infoTextStyle}>{infoText}</body>
        </div>
      </div>
    </div>
  );
};

const text = {
  newZealand: 'New Zealand, Mount Maunganui is where I was born and raised.',
  studies:
    'I studied Electrical and Electronic Engineering and obtained a BEng ' +
    '(Honours) from the University of Canterbury. I directed my course to' +
    ' have a heavy focus on programming and embedded systems.',
  mobileDevWork:
    'Using the skills I developed from my degree and previous work I ' +
    'learnt how to develop mobile applications and have been freelancing ' +
    'this work since.',
  music:
    'I have played music since a young age, starting on the piano and ' +
    'moving on to the guitar, vocals and drums at a later age. I have a ' +
    'lot of experience composing and performing with bands and by myself.',
  sports:
    'Growing up close to the beach has resulted in surfing and skateboard' +
    'being my favourite sports.'
};

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
    margin: 48
  } as React.CSSProperties,
  rowTextStyle: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'lighter',
    opacity: '80%',
    margin: 50
  } as React.CSSProperties,
  infoTextStyle: {
    fontSize: 24,
    opacity: '80%',
    textAlign: 'center'
  } as React.CSSProperties,
  icon: {
    size: 80
  }
};

export default HomeAboutSection;
