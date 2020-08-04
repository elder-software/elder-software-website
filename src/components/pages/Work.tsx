import React from 'react';
import WorkRow from '../common/pageElements/WorkRow';
import {
  ReactIcon,
  AppleIcon,
  JavaIcon,
  AndroidIcon,
} from '../common/icons/techicons';

const Work: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  const resize = () => setIsMobile(window.innerWidth <= 1000);

  return (
    <div>
      {workInfo.map(item => {
        return (<WorkRow
          key={item.name}
          name={item.name}
          logoImage={item.logoImage}
          technologies={item.technologies}
          features={item.features}
          featureIcons={item.featureIcons}
          title={item.title}
          testimonial={item.testimonial}
          testimonialAuthor={item.testimonialAuthor}
          isMobile={isMobile}
        />)
      })}
    </div>
  );

}

export interface WorkInfoProps {
  name: string;
  logoImage: string;
  technologies: React.ReactNode[];
  features: string[];
  featureIcons: string[];
  title: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

const workInfo: WorkInfoProps[] = [
  {
    name: 'Lautrec Façade Design',
    logoImage: 'Lautrec',
    technologies: [
      <AndroidIcon size={80} />,
      <JavaIcon size={80} />
    ],
    title: 'Quality Assurance for Site Inspections',
    features: [
      'Automatically formatted PDF generation.',
      'Dropbox file sync',
      'Google sheets database',
      'Firebase login'
    ],
    featureIcons: ['PdfIcon', 'DropboxIcon', 'SheetsIcon', 'FirebaseIcon'],
    testimonial: "We gave James a brief & a suggested report format for a " +
      "software tool that would better meet our specific needs. " +
      "James met the brief & the budget for the android app he designed & implemented " +
      "for us. James engineering background and practical experience " +
      "in the construction sector meant he had a good understanding of our requirements. " +
      "We have a had a great payback for the time & money invested in developing this tool " +
      "and have no hesitation in recommending James services.",
    testimonialAuthor: "Ron Hanley - Lautrec Director"
  },
  {
    name: 'Structural Coating Services',
    logoImage: 'SCS',
    technologies: [
      <AndroidIcon size={80} />,
      <JavaIcon size={80} />
    ],
    title: 'Quality Assurance for Site Inspections',
    features: [
      'Automatically formatted PDF generation',
      'Dropbox file sync',
      'Firebase Database / Login'
    ],
    featureIcons: ['PdfIcon', 'DropboxIcon', 'FirebaseIcon'],
    testimonial: "We created an app with James to assist with our company’s " +
      "daily operations. The app is very easy to use and has helped us to improved " +
      "time efficiency for the business. James is easy to work with, " +
      "communicated well throughout the development, testing phases and incorporated " +
      "our ideas for adjustments on schedule. " +
      "The knowledge and skills that James has with developing an app that suits " +
      "our exact needs is impressive. We have had feedback from our customers that " +
      "the app is very easy to follow. We would recommend anyone to work with James.",
    testimonialAuthor: "Sara - SCS Administration"
  },
  {
    name: 'Woodlands Stud',
    logoImage: 'WoodlandsStud',
    technologies: [
      <ReactIcon size={80} />,
      <AndroidIcon size={80} />,
      <AppleIcon size={80} />
    ],
    title: 'Sales Assistance Tool',
    features: [
      'Firebase Database / Login',
      'Push Notifications (Using Firebase)',
      'Automatically formatted PDF generation',
    ],
    featureIcons: ['FirebaseIcon', 'PushNotificationIcon', 'PdfIcon']
  },
  {
    name: 'King Facade International',
    title: 'Quality Assurance for Site Inspections',
    logoImage: 'KFI',
    technologies: [
      <ReactIcon size={80} />,
      <AndroidIcon size={80} />,
      <AppleIcon size={80} />
    ],
    features: [
      'Firebase Database / Login',
      'Dropbox file sync',
      'Automatically formatted PDF generation',
    ],
    featureIcons: ['FirebaseIcon', 'DropboxIcon', 'PdfIcon']
  }
];


export default Work;