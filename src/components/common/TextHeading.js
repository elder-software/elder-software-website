import React, { Component } from 'react';
import { Link } from "react-router-dom";


class TextHeading extends Component {
  constructor() {
    super();

    this.state = {
      opacity: 1
    }
  }

  //set the text
  onMouseover(e) {
    this.setState({ opacity: 0.5 });
  }

  //clear the text
  onMouseout(e) {
    this.setState({ opacity: 1 });
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <div>
          <li
            style={{
              opacity: this.state.opacity,
              color: 'black',
              textDecoration: 'none'
            }}
            onMouseEnter={this.onMouseover.bind(this)}
            onMouseLeave={this.onMouseout.bind(this)}
          >
            <Link to={`/${this.props.linkRef}`}>{this.props.text}</Link>
          </li>
        </div>
      </div>
    );
  }
}

export default TextHeading;