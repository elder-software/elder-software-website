import React from 'react';
import TextHeading from './TextHeading';
import Logo from '../assets/logo.jpg';

const Footer = () => {
  return (
      <div style={{
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
        position: 'absolute'
      }}>
        <h1 style={{
          color: 'white'
        }}>FOooter Text</h1>
      </div>
  );
}

export default Footer;