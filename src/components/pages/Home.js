import React, { Component } from 'react';
import Banner from '../common/Banner';
import Logo from '../assets/logo.jpg';


class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', flex: 1, justifyContent: 'center', margin: 30 }}>
          <img style={{ width: 200 }} src={Logo} alt={'something'} />
        </div>

        {Banner()}
      </div>
    );
  }
}


export default Home;