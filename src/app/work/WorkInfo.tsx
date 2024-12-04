/* eslint-disable react/jsx-key */
import { AndroidIcon, AppleIcon, MobileIcon, ReactIcon, TvIcon } from '@/components/icons/techicons';
import React from 'react';

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
    icon: '/appIcons/iView.jpeg',
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
      '/screenshots/iViewScreenShot1.jpg',
      '/screenshots/iViewScreenShot2.jpg',
      '/screenshots/iViewScreenShot3.jpg',
      '/screenshots/iViewScreenShot4.jpg'
    ],
    testimonial: '',
    testimonialAuthor: ''
  },
  {
    name: 'Virgin Australia',
    icon: '/appIcons/virginIcon.jpeg',
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
      '/screenshots/virginScreenshot1.jpg',
      '/screenshots/virginScreenshot2.jpg',
      '/screenshots/virginScreenshot3.jpg'
    ],
    testimonial: '',
    testimonialAuthor: ''
  },
  {
    name: 'myLearners',
    icon: '/appIcons/mylearners.jpeg',
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
      '/screenshots/mylearnersScreenshot1.jpg',
      '/screenshots/mylearnersScreenshot2.jpg',
      '/screenshots/mylearnersScreenshot3.jpg',
      '/screenshots/mylearnersScreenshot4.jpg'
    ],
  },
  {
    name: 'My 7-Eleven',
    icon: '/appIcons/my7eleven.jpg',
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
      '/screenshots/my7elevenScreenshot1.jpg',
      '/screenshots/my7elevenScreenshot2.jpg',
      '/screenshots/my7elevenScreenshot3.jpg',
      '/screenshots/my7elevenScreenshot4.jpg'
    ],
    testimonial: '',
    testimonialAuthor: ''
  },
  {
    name: 'King Facade International',
    icon: '/appIcons/KFI.png',
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
    screenshots: ['/screenshots/KFISS1.png', '/screenshots/KFISS2.png'],
    testimonial: '',
      /*'We created an app with James to help automate some of our' +
      ' company procedures. James stuck to the brief and budget and communicated ' +
      'well throughout the process. We now have a well designed, intuitive app that ' +
      "has helped with our efficiency and consistency. We highly recommend James' services"*/
    testimonialAuthor: ''
  },
  {
    name: 'Lautrec Façade Design',
    icon: '/appIcons/Lautrec.png',
    technologies: (size) => [<AndroidIcon size={size} />],
    keyDetails: [
      'in-house app (<20 users)',
      'Firebase',
      'Dropbox',
      'PDF generation'
    ],
    description: 'An in house app used to streamline internal process. This app helps with Quality Assurance for Site Inspections',
    screenshots: ['/screenshots/LautrecSS1.png', '/screenshots/LautrecSS2.png'],
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
    icon: '/appIcons/SCS.png',
    technologies: (size) => [<AndroidIcon size={size} />],
    keyDetails: [
      'Automatically formatted PDF generation',
      'Dropbox file sync',
      'Firebase Database / Login'
    ],
    description: 'An in house app used to streamline internal process. This app helps with Quality Assurance for Site Inspections',
    screenshots: ['/screenshots/SCSSS1.png', '/screenshots/SCSSS2.png'],
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
