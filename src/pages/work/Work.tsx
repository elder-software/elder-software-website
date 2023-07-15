import React from 'react';
import WorkRow from './WorkRow';
import { workInfo } from '../../assets/workInfo/workInfo';

const Work: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const resize = (): void => setIsMobile(window.innerWidth <= 1000);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);

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
