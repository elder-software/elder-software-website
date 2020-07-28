import React, { Component } from 'react';
import TextHeading from './TextHeading';
import Logo from '../../assets/logo.jpg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isMobile: window.innerWidth <= 1000 });
  }


  render() {
    const { isMobile } = this.state;

    return (
      <div>
        <div style={styles.logoDiv}>
          <img
            style={{ width: isMobile ? '35%' : '20%', height: "100%" }}
            src={Logo} alt={'logo'}
          />
        </div>

        <div style={styles.headingsDiv}>
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
        </div>
      </div>
    );
  }
}

const styles = {
  logoDiv: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    margin: '5%'
  },
  headingsDiv: {
    display: 'flex',
    paddingTop: '1%',
    paddingBottom: '1%',
    border: '1px solid black',
    borderRadius: 15,
    marginRight: 5,
    marginLeft: 5,
    background: 'black',
    WebkitBoxShadow: "2px 2px 2px #DFDFDF",
    MozBoxShadow: "2px 2px 2px #DFDFDF",
    boxShadow: "2px 2px 2px #DFDFDF"
  }
}

export default Header;