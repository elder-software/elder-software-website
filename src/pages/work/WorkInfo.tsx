/* eslint-disable react/jsx-key */
import React from 'react';
import {
  AndroidIcon,
  TvIcon,
  MobileIcon,
  ReactIcon,
  AppleIcon,
} from '../../components/icons/techicons';

export interface WorkInfoProps {
  name: string;
  icon: string;
  technologies: (size: number) => React.ReactNode[];
  keyDetails: string[];
  description: string;
  screenshots: string[];
  testimonial?: string;
  testimonialAuthor?: string;
}

export const workInfo: WorkInfoProps[] = [
  {
    name: 'ABC iView',
    icon: './iView.jpeg',
    technologies: (size) => [
      <AndroidIcon key="test" size={size} />,
      <TvIcon key="tv" size={size} />,
      <MobileIcon key="mobile" size={size} />
    ],
    keyDetails: [
      'Government owned project',
      '5M+ downloads',
      'Android, Kotlin'
    ],
    description:
      'The ABC is a free video streaming service for Australians. Watch Live Streams, TV shows and movies.' +
      '\n\nFrom a software standpoint it is an interesting app to work on requiring features to be developed ' +
      'on both TV and Mobile platforms. We used many of the latest tools available to developers.',
    screenshots: [
      './iViewScreenShot1.jpg',
      './iViewScreenShot2.jpg',
      './iViewScreenShot3.jpg',
      './iViewScreenShot4.jpg'
    ],
    testimonial: '',
    testimonialAuthor: ''
  },
  {
    name: 'Virgin Australia',
    icon: './virginIcon.jpeg',
    technologies: (size) => [
      <AndroidIcon key="test" size={size} />,
      <MobileIcon key="mobile" size={size} />
    ],
    keyDetails: ['500,000+ downloads', 'Android, Kotlin'],
    description:
      'Virgin Australias official mobile app for assisting travellers, allowing them to book and ' +
      'change flights, view boarding passes. The codebase used the latest recommended libraries' +
      ' Google for Android development regarding architecture and 3rd party libraries',
    screenshots: [
      './virginScreenshot1.jpg',
      './virginScreenshot2.jpg',
      './virginScreenshot3.jpg'
    ],
    testimonial: '',
    testimonialAuthor: ''
  },
  {
    name: 'myLearners',
    icon: './mylearners.jpeg',
    technologies: (size) => [
      <AndroidIcon key="test" size={size} />,
      <MobileIcon key="mobile" size={size} />
    ],
    keyDetails: [
      '100,000K+ downloads',
      'Government owned project',
      'Android, Kotlin'
    ],
    description:
      'myLearners is a mobile app for assisting learner drivers in Australia. We worked with the government ' +
      'of the state of Victoria to develop an application that can be used to track the users hours driven, road conditions ' +
      'and provide useful learning materials to help learner drivers move on to their full license.',
    screenshots: [
      './mylearnersScreenshot1.jpg',
      './mylearnersScreenshot2.jpg',
      './mylearnersScreenshot3.jpg',
      './mylearnersScreenshot4.jpg'
    ],
  },
  {
    name: 'My 7-Eleven',
    icon: './my7eleven.jpg',
    technologies: (size) => [
      <AndroidIcon key="test" size={size} />,
      <MobileIcon key="mobile" size={size} />
    ],
    keyDetails: [
      '1M+ downloads',
      'Android, Kotlin'
    ],
    description:
      '7 Eleven loyalty awards, the ability to lock in a low fuel price, checkout items and petrol ' +
      'using only the app. The development was an interesting challenge to complete these unique features.',
    screenshots: [
      './my7elevenScreenshot1.jpg',
      './my7elevenScreenshot2.jpg',
      './my7elevenScreenshot3.jpg',
      './my7elevenScreenshot4.jpg'
    ],
    testimonial: '',
    testimonialAuthor: ''
  },
  {
    name: 'King Facade International',
    icon: './KFI.png',
    technologies: (size) => [
      <ReactIcon size={size} />,
      <AndroidIcon size={size} />,
      <AppleIcon size={size} />
    ],
    keyDetails: [
      'in-house app (<20 users)',
      'Firebase',
      'Dropbox',
      'PDF generation'
    ],
    description: 'An in house app used to streamline internal process. This app helps with Quality Assurance for Site Inspections',
    screenshots: ['./KFISS1.png', './KFISS2.png'],
    testimonial: '',
      /*'We created an app with James to help automate some of our' +
      ' company procedures. James stuck to the brief and budget and communicated ' +
      'well throughout the process. We now have a well designed, intuitive app that ' +
      "has helped with our efficiency and consistency. We highly recommend James' services"*/
    testimonialAuthor: ''
  },
  {
    name: 'Lautrec Façade Design',
    icon: './Lautrec.png',
    technologies: (size) => [<AndroidIcon size={size} />],
    keyDetails: [
      'in-house app (<20 users)',
      'Firebase',
      'Dropbox',
      'PDF generation'
    ],
    description: 'An in house app used to streamline internal process. This app helps with Quality Assurance for Site Inspections',
    screenshots: ['./LautrecSS1.png', './LautrecSS2.png'],
    testimonial: '', /*
      'We gave James a brief & a suggested report format for a ' +
      'software tool that would better meet our specific needs. ' +
      'James met the brief & the budget for the android app he designed & implemented ' +
      'for us. James engineering background and practical experience ' +
      'in the construction sector meant he had a good understanding of our requirements. ' +
      'We have a had a great payback for the time & money invested in developing this tool ' +
      "and have no hesitation in recommending James' services.",*/
    testimonialAuthor: 'Ron Hanley - Director'
  },
  {
    name: 'Structural Coating Services',
    icon: './SCS.png',
    technologies: (size) => [<AndroidIcon size={size} />],
    keyDetails: [
      'Automatically formatted PDF generation',
      'Dropbox file sync',
      'Firebase Database / Login'
    ],
    description: 'An in house app used to streamline internal process. This app helps with Quality Assurance for Site Inspections',
    screenshots: ['./SCSSS1.png', './SCSSS2.png'],
    testimonial: '', /*
      'We created an app with James to assist with our company’s ' +
      'daily operations. The app is very easy to use and has helped us to improved ' +
      'time efficiency for the business. James is easy to work with, ' +
      'communicated well throughout the development, testing phases and incorporated ' +
      'our ideas for adjustments on schedule. ' +
      'The knowledge and skills that James has with developing an app that suits ' +
      'our exact needs is impressive. We have had feedback from our customers that ' +
      'the app is very easy to follow. We would recommend anyone to work with James.', */
    testimonialAuthor: 'Sara - SCS Administration'
  },
];
