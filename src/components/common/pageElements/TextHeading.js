import React, { Component } from 'react';
import { Link } from "react-router-dom";


class TextHeading extends Component {
  constructor() {
    super();

    this.state = {
      opacity: 1,
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

  onMouseover() {
    this.setState({ opacity: 0.5 });
  }

  onMouseout() {
    this.setState({ opacity: 1 });
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <div style={{ listStyleType: 'none' }}>
          <li>
            <Link
              style={{
                opacity: this.state.opacity,
                color: 'white',
                textDecoration: 'none',
                listStyleType: 'none',
                padding: 0,
                fontSize: this.state.isMobile ? 10 : 15
              }}
              onMouseEnter={this.onMouseover.bind(this)}
              onMouseLeave={this.onMouseout.bind(this)}
              to={`/${this.props.linkRef}`}>
              {this.props.text}
            </Link>
          </li>
        </div>
      </div>
    );
  }
}

export default TextHeading;