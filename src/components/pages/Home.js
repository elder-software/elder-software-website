import React, { Component } from 'react';
import Profile from '../assets/jamie-photo.jpg';
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
          background: '#e8e8e8',
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
                    width: '38%',
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    alignSelf: 'left',
                  }}
                  src={Profile}
                  alt={'hey hey'}
                />

                <div style={{
                  width: '62%',
                  padding: 30,
                  // background: 'green',
                  justifyContent: 'center',
                  alignContent: 'center'
                }}>
                  <h1 style={{ margin: 0, fontSize: 40, textAlign: 'center' }}>James Elder</h1>
                  <h1 style={{ margin: 0, fontSize: 26, textAlign: 'center' }}>Mobile Developer</h1>
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


export default Home;