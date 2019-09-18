import React, { Component } from 'react';


class TextHeading extends Component {
  constructor() {
    super();

    this.state = {
      opacity: 1
    }
  }

  //set the text
  onMouseover(e) {
    console.log('hover');
    this.setState({ opacity: 0.5 });
  }

  //clear the text
  onMouseout(e) {
    console.log('not hover');
    this.setState({ opacity: 1 });
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <div>
          <a
            style={{ opacity: this.state.opacity, color: 'black', textDecoration: 'none' }}
            href={`/${this.props.linkRef}`}
            onMouseEnter={this.onMouseover.bind(this)}
            onMouseLeave={this.onMouseout.bind(this)}
          >
            {this.props.text}
          </a>
        </div>
      </div>
    );
  }
}

export default TextHeading;