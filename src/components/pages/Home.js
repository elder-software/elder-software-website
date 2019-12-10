import React, { Component } from 'react';
import Profile from '../assets/jamie-photo.jpg';

class Home extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <div>
            <img
              style={{
                width: 400,
                border: '1px solid black',
                borderRadius: 230
              }}
              src={Profile}
              alt={'hey hey'}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignSelf: '',
            flexDirection: 'column'
          }}
        >
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