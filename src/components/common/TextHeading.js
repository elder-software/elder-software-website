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
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', padding: 5 }}>
        <div>
          <li>
            <Link
              style={{
                opacity: this.state.opacity,
                color: 'white',
                textDecoration: 'none',
                listStyleType: 'none',
                padding: 0,
                margin: 20,
                fontSize: 15
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