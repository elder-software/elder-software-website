import React, { Component } from 'react';
import WorkRow from '../common/WorkRow';

class Work extends Component {
  renderList = () => {
    return (
      workInfo.map(item => {
        return <WorkRow
          text={item.name}
          logoImage={item.logoImage}
          technologies={item.technologies}
          features={item.features}
          featureIcons={item.featureIcons}
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
    technologies: ['Android', 'Java'],
    features: [
      'Automatically formatted PDF generation.',
      'Dropbox file sync',
      'Google sheets database',
      'Firebase login'
    ],
    featureIcons: ['PdfIcon', 'DropboxIcon', 'SheetsIcon', 'FirebaseIcon']
  },
  {
    name: 'Structural Coating Services',
    logoImage: 'SCS',
    technologies: ['Android', 'Java'],
    features: [
      'Automatically formatted PDF generation',
      'Dropbox file sync',
      'Firebase Database / Login'
    ],
    featureIcons: ['PdfIcon', 'DropboxIcon', 'FirebaseIcon']
  },
  {
    name: 'Woodlands Stud',
    logoImage: 'WoodlandsStud',
    technologies: ['ReactNative', 'Android', 'IOS'],
    features: [
      'Firebase Database / Login',
      'Push Notifications (Using Firebase)',
      'Automatically formatted PDF generation',
    ],
    featureIcons: ['FirebaseIcon', 'PushNotificationIcon', 'PdfIcon']
  },
  {
    name: 'King Facade International',
    logoImage: 'KFI',
    technologies: ['ReactNative', 'Android', 'IOS'],
    features: [
      'Firebase Database / Login',
      'Dropbox file sync',
      'Automatically formatted PDF generation',
    ],
    featureIcons: ['FirebaseIcon', 'DropboxIcon', 'PdfIcon']
  }
];


export default Work;