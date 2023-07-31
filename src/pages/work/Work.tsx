import React from 'react';
import WorkRow from './WorkRow';
import { workInfo } from './WorkInfo';
import useIsMobile from '../../hooks/useIsMobile';

const Work: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      {workInfo.map((item) => {
        return (
          <WorkRow
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
          />
        );
      })}
    </div>
  );
};

export default Work;
