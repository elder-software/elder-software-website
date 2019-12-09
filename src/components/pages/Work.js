import React, { Component } from 'react';
import WorkRow from '../common/WorkRow';

class Work extends Component {
  renderList = () => {
    return (
      workInfo.map(item => {
        return <WorkRow
          text={item.name}
          logoImage={item.logoImage}
          platforms={item.platforms}
          languages={item.languages}
          info={item.info}
        />
      })
    );
  };

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const workInfo = [
  {
    name: 'Lautrec Façade Design',
    logoImage: 'Lautrec',
    platforms: 'Android',
    languages: 'Java',
    info: [
      'Automatically formatted PDF generation.',
      'Dropbox file sync.',
      'Google sheets database.',
      'Firebase login.'
    ]
  }
];


export default Work;