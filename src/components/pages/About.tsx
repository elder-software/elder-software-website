import React from 'react';
import {
  NewZealandIcon,
  CertificateIcon,
  MusicIcon,
  SurfSkateIcon,
  ComputerIcon,
  CircuitBoardAboutIcon
} from '../common/abouticons';

const About: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  const resize = () => setIsMobile(window.innerWidth <= 1000);

  return (
    <div style={styles.mainDiv}>
      <div style={styles.greyInnerDiv}>
        <div style={styles.greyInnerDiv2}>
          <div style={styles.titleDiv}>
            <div style={{
              display: 'flex',
              justifyContent: 'row',
              alignItems: 'center',
            }}>
              <div style={{
                padding: 30,
                alignContent: 'center'
              }}>
                <h1 style={{ margin: 0, fontSize: 20 }}>About</h1>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.infoDiv}>
          <div style={styles.rowStyle}>
            <NewZealandIcon size={80} />
            <div style={{ ...styles.rowTextStyle, fontSize: isMobile ? 12 : 16 }}>
              New Zealand, Mount Maunganui is where I was born and raised.
              </div>
          </div>

          <div style={styles.rowStyle}>
            <CertificateIcon size={80} />
            <div style={{ ...styles.rowTextStyle, fontSize: isMobile ? 12 : 16 }}>
              I studied Electrical and Electronic Engineering and obtained
              a BEng (Honours) from the University of Canterbury.
              I directed my course to have a heavy focus on programming and
              embedded systems.
              </div>
          </div>

          <div style={styles.rowStyle}>
            <CircuitBoardAboutIcon size={80} />
            <div style={{ ...styles.rowTextStyle, fontSize: isMobile ? 12 : 16 }}>
              After my studies I was employed as a project manager for 2 years
              at a switchboard company. There I also designed, programmed
              and manufactured embedded systems.
              </div>
          </div>

          <div style={styles.rowStyle}>
            <ComputerIcon size={80} />
            <div style={{ ...styles.rowTextStyle, fontSize: isMobile ? 12 : 16 }}>
              Using the skills I developed from my degree and previous
              work I learnt how to develop mobile applications and have been
              freelancing this work since.
              </div>
          </div>

          <div style={styles.rowStyle}>
            <MusicIcon size={80} />
            <div style={{ ...styles.rowTextStyle, fontSize: isMobile ? 12 : 16 }}>
              I have played music since a young age, starting on the piano and
              moving on to the guitar, vocals and drums at a later age.
              I have a lot of experience composing and performing with bands and
              by myself.
              </div>
          </div>

          <div style={styles.rowStyle}>
            <SurfSkateIcon size={80} />
            <div style={{ ...styles.rowTextStyle, fontSize: isMobile ? 12 : 16 }}>
              Growing up close to the beach has resulted in surfing and
              skateboard being my favourite sports.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 10,
  } as React.CSSProperties,
  greyInnerDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    WebkitBoxShadow: "2px 2px 2px #DFDFDF",
    MozBoxShadow: "2px 2px 2px #DFDFDF",
    boxShadow: "2px 2px 2px #DFDFDF",
    background: '#e8e8e8',
    padding: 5
  } as React.CSSProperties,
  greyInnerDiv2: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    border: '0px solid lightgrey',
    marginBottom: 0,
    paddingLeft: '20%',
    paddingRight: '20%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  } as React.CSSProperties,
  titleDiv: {
    display: 'flex',
    justifyContent: 'row',
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 15,
    background: 'white',
    margin: 30
  } as React.CSSProperties,
  infoDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '1px solid #f2f2f2',
    marginTop: 0,
    borderRadius: 15,
    width: '100%',
    background: 'white',
    paddingTop: 30,
    paddingBottom: 30,
  } as React.CSSProperties,
  rowStyle: {
    display: 'flex',
    justifyContent: 'column',
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30
  } as React.CSSProperties,
  rowTextStyle: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    fontSize: 16,
    fontWeight: 'lighter',
    opacity: '80%'
  } as React.CSSProperties
}


export default About;