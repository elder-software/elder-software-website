import React from 'react';
import { GithubSmallIcon, LinkedInSmallIcon } from './contacticons';

const Footer = () => {
  return (
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
}


const styles = {
  mainDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
    border: '1px solid black',
    borderRadius: 15,
    background: 'black',
    WebkitBoxShadow: "2px 2px 2px #DFDFDF",
    MozBoxShadow: "2px 2px 2px #DFDFDF",
    boxShadow: "2px 2px 2px #DFDFDF",
    bottom: 0,
    left: 0,
    right: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  innerDiv: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  textDiv: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    padding: 10,
    fontSize: 12,
    textAlign: 'center'
  },
  iconsDiv: {
    display: 'flex',
    justifyContent: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
}

export default Footer;