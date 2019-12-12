import React, { Component } from 'react';
import Profile from '../assets/jamie-photo.jpg';
import { FaHome, FaCode, FaJava, FaAndroid, FaApple, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { GoCircuitBoard } from 'react-icons/go';
import CPlusPlus from '../assets/technologiesLogos/CPlusPlus.png';
import { 
  JavascriptIcon, 
  ReactIcon,
  AndroidIcon,
  AppleIcon,
  JavaIcon,
  CPlusPlusIcon,
  CircuitBoardIcon
} from '../common/icons';

class Home extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        marginTop: 10,
      }}>
        <div style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 15,
          webkitBoxShadow: "2px 2px 2px #DFDFDF",
          mozBoxShadow: "2px 2px 2px #DFDFDF",
          boxShadow: "2px 2px 2px #DFDFDF",
          background: '#f2f2f2',
          padding: 5
        }}>
          <div style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            border: '0px solid lightgrey',
            marginBottom: 0,
            paddingLeft: '20%',
            paddingRight: '20%',
            paddingTop: '5%',
            paddingBottom: '5%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'row',
              alignSelf: 'center',
              flexDirection: 'column',
              borderRadius: 15,
              background: 'white',
              width: '100%',
              // webkitBoxShadow: "2px 2px 2px #DFDFDF",
              // mozBoxShadow: "2px 2px 2px #DFDFDF",
              // boxShadow: "2px 2px 2px #DFDFDF"
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'row',
                alignItems: 'center'
              }}>
                <img
                  style={{
                    width: '40%',
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    alignSelf: 'left',
                  }}
                  src={Profile}
                  alt={'hey hey'}
                />

                <div style={{
                  width: '50%',
                  padding: 30,
                }}>
                  <h1 style={{ margin: 0 }}>Hello,</h1>
                  <h1 style={{ margin: 0 }}>I'm James Elder</h1>
                  <h1 style={{ margin: 0 }}>A mobile developer</h1>
                  <h1 style={{ margin: 0 }}>From New Zealand</h1>
                  <h1 style={{ margin: 0 }}>Thank you</h1>
                  <h1 style={{ margin: 0 }}>Goodbye</h1> 
                </div>
              </div>
            </div>
          </div>

          <div style={{
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
          }}>
            <JavascriptIcon />
            <ReactIcon />
            <AndroidIcon />
            <AppleIcon />
            <JavaIcon />
            <CPlusPlusIcon />
            <CircuitBoardIcon />
          </div>
        </div>
      </div>
    );
  }
}



const styles = {
  iconContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    opacity: '70%'
  },
  iconStyle: {
    width: 80,
    height: 80,
    padding: 20,
    border: '1px solid #DFDFDF',
    borderRadius: 15,
  }
}


export default Home;