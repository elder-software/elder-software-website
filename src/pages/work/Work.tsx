import React from 'react';
import WorkRow from './WorkRow';
import {
  AndroidIcon,
  TvIcon,
  MobileIcon
} from '../../components/icons/techicons';

interface WorkInfoProps {
  name: string;
  icon: string;
  technologies: React.ReactNode[];
  description: string;
  title: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

const workInfo: WorkInfoProps[] = [
  {
    name: 'ABC iView',
    title: 'iView Streaming Application',
    icon: './iView.jpeg',
    technologies: [
      <AndroidIcon key="test" size={80} />,
      <TvIcon key="tv" />,
      <MobileIcon key="mobile" />
    ],
    description: 'This is a description',
    testimonial: '',
    testimonialAuthor: ''
  }
];

const Work: React.FC = () => {
  // require.context used here so that each WorkRow doesn't import all
  // icons each time it is rendered
  const iconImages = require.context(
    '../../assets/appIcons',
    true,
    /\.(png|jpe?g|svg)$/
  );

  return (
    <div style={{ margin: 15 }}>
      {workInfo.map((item) => {
        return (
          <WorkRow
            key={item.name}
            name={item.name}
            icon={iconImages(item.icon)}
            technologies={item.technologies}
            title={item.title}
            description={item.description}
            testimonial={item.testimonial}
            testimonialAuthor={item.testimonialAuthor}
          />
        );
      })}
    </div>
  );
};

export default Work;
