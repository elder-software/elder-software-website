import React from 'react';
import { GithubSmallIcon, LinkedInSmallIcon } from '../icons/contacticons';

const Footer: React.FC = () => (
  <div style={styles.mainDiv}>
    <div style={styles.innerDiv}>
      <div style={styles.textDiv}>
        <div>Website created using ReactJS</div>
        <div>Code available on GitHub</div>
      </div>
      <div style={styles.iconsDiv}>
        <GithubSmallIcon />
        <LinkedInSmallIcon />
      </div>
    </div>
  </div>
);

const styles = {
  mainDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingTop: '1%',
    paddingBottom: '1%',
    border: '1px solid black',
    borderRadius: 15,
    background: 'black',
    opacity: 0.85,
    WebkitBoxShadow: '2px 2px 2px #DFDFDF',
    MozBoxShadow: '2px 2px 2px #DFDFDF',
    boxShadow: '2px 2px 2px #DFDFDF',
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  } as React.CSSProperties,
  innerDiv: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  } as React.CSSProperties,
  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    padding: 10,
    fontSize: 12,
    textAlign: 'center'
  } as React.CSSProperties,
  iconsDiv: {
    display: 'flex',
    justifyContent: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10
  } as React.CSSProperties
};

export default Footer;
