import React from 'react';
import { Link } from "react-router-dom";
import { GithubSmallIcon, LinkedInSmallIcon } from './contacticons';
import { FaGithub } from 'react-icons/fa';
import TextHeading from './TextHeading';

const Footer = () => {
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      paddingTop: 5,
      border: '1px solid black',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      background: 'black',
      webkitBoxShadow: "2px 2px 2px #DFDFDF",
      mozBoxShadow: "2px 2px 2px #DFDFDF",
      boxShadow: "2px 2px 2px #DFDFDF",
      bottom: 0,
      left: 0,
      right: 0,
      marginLeft: 30,
      marginRight: 30,
      position: 'absolute',
      padding: 20,
      alignItems: 'center',
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

      <div style={{
        // opacity: this.state.opacity,
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <GithubSmallIcon />
        <LinkedInSmallIcon />
      </div>

    </div>
  );
}

export default Footer;