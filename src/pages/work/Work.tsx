import React from 'react';
import WorkRow from './WorkRow';
import { workInfo } from './WorkInfo';

const Work: React.FC = () => {
  // require.context used here so that each WorkRow doesn't import all
  // icons each time it is rendered
  const iconImages = require.context(
    '../../assets/appIcons',
    true,
    /\.(png|jpe?g|svg)$/
  );

  const screenShotImages = require.context(
    '../../assets/screenshots',
    true,
    /\.(png|jpe?g|svg)$/
  );

  return (
    <div
      style={{
        margin: 15,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}
    >
      {workInfo.map((item) => (
        <WorkRow
          key={item.name}
          name={item.name}
          icon={iconImages(item.icon)}
          technologies={item.technologies}
          description={item.description}
          screenshots={item.screenshots.map((image) => screenShotImages(image))}
          testimonial={item.testimonial}
          testimonialAuthor={item.testimonialAuthor}
        />
      ))}
    </div>
  );
};

export default Work;
