import React from 'react';
import { EmailIcon, PhoneIcon } from '../common/icons/contacticons';

const Contact: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);

  const resize = () => setIsMobile(window.innerWidth <= 1000);

  return (
    <div style={styles.mainContainerDiv}>
      <div style={styles.greyCardDiv}>
        <div style={styles.headingContainerDiv}>
          <div style={styles.headingDiv}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'row',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  padding: 30,
                  alignContent: 'center'
                }}
              >
                <h1 style={{ margin: 0, fontSize: 20 }}>Contact</h1>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.contactInfoDiv}>
          <div style={styles.rowStyle}>
            <EmailIcon size={80} />
            <div
              style={{
                ...styles.rowTextStyle,
                fontSize: isMobile ? 12 : 16
              }}
            >
              james@elder-software.com
            </div>
          </div>

          <div style={styles.rowStyle}>
            <PhoneIcon size={80} />
            <div
              style={{
                ...styles.rowTextStyle,
                fontSize: isMobile ? 12 : 16
              }}
            >
              +64 432 770 297
            </div>
          </div>
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
  greyCardDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    WebkitBoxShadow: '2px 2px 2px #DFDFDF',
    mozBoxShadow: '2px 2px 2px #DFDFDF',
    boxShadow: '2px 2px 2px #DFDFDF',
    background: '#e8e8e8',
    padding: 5
  } as React.CSSProperties,
  headingContainerDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    border: '0px solid lightgrey',
    marginBottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  } as React.CSSProperties,
  headingDiv: {
    display: 'flex',
    justifyContent: 'row',
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 15,
    background: 'white',
    margin: 30
  } as React.CSSProperties,
  contactInfoDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    border: '1px solid #f2f2f2',
    marginTop: 0,
    borderRadius: 15,
    justifyContent: 'space-around',
    width: '100%',
    background: 'white',
    paddingTop: 30
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
    fontWeight: 'lighter',
    opacity: '80%'
  } as React.CSSProperties
};

export default Contact;
