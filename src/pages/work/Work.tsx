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
    <div style={{ margin: 15 }}>
      {arrayGroupBy(workInfo, 2).map((itemGroup) => (
        <div
          key={itemGroup.map((value) => value.name).join()}
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          {itemGroup.map((item) => (
            <WorkRow
              key={item.name}
              name={item.name}
              icon={iconImages(item.icon)}
              technologies={item.technologies}
              title={item.title}
              description={item.description}
              screenshots={item.screenshots.map((image) =>
                screenShotImages(image)
              )}
              testimonial={item.testimonial}
              testimonialAuthor={item.testimonialAuthor}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

function arrayGroupBy<T>(array: T[], groupSize: number) {
  const groups: T[][] = [];
  for (let i = 0; i < array.length; i += groupSize) {
    groups.push(array.slice(i, i + groupSize));
  }
  return groups;
}

export default Work;
