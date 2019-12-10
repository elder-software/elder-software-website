import React, { Component } from 'react';
import Profile from '../assets/jamie-photo.jpg';

class Home extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignSelf: 'center'
        }}>
          <img
            style={{
              width: 200,
              border: '1px solid lightgrey',
              borderRadius: 15,
              webkitBoxShadow: "2px 2px 2px #DFDFDF",
              mozBoxShadow: "2px 2px 2px #DFDFDF",
              boxShadow: "2px 2px 2px #DFDFDF"
            }}
            src={Profile}
            alt={'hey hey'}
          />
          <h1>
            James Elder
          </h1>
          <h1>
            Mobile app developer
          </h1>
        </div>

      </div>

    );
  }
}


export default Home;