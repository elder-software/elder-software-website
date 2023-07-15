import React from 'react';
import Profile from '../../assets/jamie-photo.jpg';
import { AppleIcon, AndroidIcon } from '../../components/icons/techicons';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);

  const resize = () => setIsMobile(window.innerWidth <= 900);

  return (
    <div style={styles.mainContainerDiv}>
      <div style={styles.mainCardDiv}>
        <div
          style={{
            ...styles.imageAndTitleDiv,
            paddingLeft: isMobile ? '5%' : '20%',
            paddingRight: isMobile ? '5%' : '20%'
          }}
        >
          <div style={styles.imageAndTitleInnerDiv}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'row',
                alignItems: 'center'
              }}
            >
              <img
                style={styles.profilePicDiv}
                src={Profile}
                alt="james-potrait"
              />

              <div style={styles.headingTextDiv}>
                <h1
                  style={{
                    margin: 0,
                    fontSize: isMobile ? 20 : 40,
                    textAlign: 'center'
                  }}
                >
                  James Elder
                </h1>
                <h1
                  style={{
                    margin: 0,
                    fontSize: isMobile ? 13 : 26,
                    textAlign: 'center'
                  }}
                >
                  Mobile Developer
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.technologiesDiv}>
          <AndroidIcon size={isMobile ? 30 : 80} />
          <AppleIcon size={isMobile ? 30 : 80} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainerDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 10
  } as React.CSSProperties,
  mainCardDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    WebkitBoxShadow: '2px 2px 2px #DFDFDF',
    MozBoxShadow: '2px 2px 2px #DFDFDF',
    boxShadow: '2px 2px 2px #DFDFDF',
    background: '#e8e8e8',
    padding: 5
  } as React.CSSProperties,
  imageAndTitleDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    border: '0px solid lightgrey',
    marginBottom: 0,
    paddingTop: '5%',
    paddingBottom: '5%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  } as React.CSSProperties,
  imageAndTitleInnerDiv: {
    display: 'flex',
    justifyContent: 'row',
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 15,
    background: 'white',
    width: '100%'
  } as React.CSSProperties,
  profilePicDiv: {
    width: '38%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    alignSelf: 'left'
  } as React.CSSProperties,
  headingTextDiv: {
    width: '62%',
    padding: 30,
    justifyContent: 'center',
    alignContent: 'center'
  } as React.CSSProperties,
  technologiesDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    border: '1px solid #f2f2f2',
    marginTop: 0,
    borderRadius: 15,
    justifyContent: 'space-around',
    width: '100%',
    background: 'white',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%'
  } as React.CSSProperties
};

export default Home;
