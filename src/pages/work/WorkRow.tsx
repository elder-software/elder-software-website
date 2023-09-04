import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { WorkInfoProps } from './WorkInfo';
import './workRow.css';
import Carousel from './carousel/Carousel';

const WorkRow: React.FC<WorkInfoProps> = ({
  name,
  icon,
  technologies,
  keyDetails,
  description,
  screenshots,
  testimonial,
  testimonialAuthor
}) => {
  // const isMobile = useIsMobile();
  const [infoExpanded, setInfoExpanded] = React.useState(false);

  return (
    <div className="fullRowDiv">
      <div className="mainGreyDiv">
        <div
          role="button"
          style={styles.rowHeadingDiv}
          onMouseDown={() => setInfoExpanded(!infoExpanded)}
          tabIndex={0}
        >
          <img
            style={{ width: 50, height: '100%', alignSelf: 'center' }}
            src={icon}
            alt={icon}
          />
          <h1 style={styles.companyNameText}>{name}</h1>
        </div>
      </div>

      <div style={styles.workDetailsDiv}>
        <div style={styles.technologiesDiv}>
          {technologies.map((value, index) => {
            return (
              <div key={`${name}:technology-${index}`} style={{ margin: 10 }}>
                {value}
              </div>
            );
          })}
        </div>
        <div className={`workDetails ${infoExpanded ? 'expanded' : ''}`}>
          <ul>
            {keyDetails.map((item, index) => (
              <li key={`${item}${index}`}>{item}</li>
            ))}
          </ul>
          <div style={styles.appFeaturesDiv}>{description}</div>
        </div>

        <div style={styles.screenshotsDiv}>
          <Carousel>
            {screenshots.map((image, index) => (
              <img
                key={`${name}:screenshot-${index}`}
                style={styles.screenshotStyle}
                src={image}
                alt={image}
              />
            ))}
          </Carousel>
        </div>

        {testimonial ? (
          <div>
            <div style={styles.testimonialText}>
              <FaQuoteLeft style={{ height: 20, width: 20, marginRight: 20 }} />
              {testimonial}
            </div>
            <body style={styles.testimonialText}>{testimonialAuthor}</body>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const styles = {
  mainGreyDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    background: '#e8e8e8',
    borderColor: 'black',
    borderWidth: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    fontWeight: 'lighter'
  } as React.CSSProperties,
  workInfoDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'start',
    paddingBottom: 30
  } as React.CSSProperties,
  rowHeadingDiv: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 10,
    borderRadius: 15
  } as React.CSSProperties,
  companyNameText: {
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 0,
    marginBottom: 0,
    fontSize: 20
  } as React.CSSProperties,
  technologiesDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10
  } as React.CSSProperties,
  descriptionDiv: {
    display: 'flex',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10
  },
  workDetailsDiv: {
    display: 'flex',
    flex: 1,
    background: 'white',
    flexDirection: 'column',
    borderRadius: 15,
    border: 0
  } as React.CSSProperties,
  appFeaturesDiv: {
    display: 'flex',
    flex: 1,
    background: 'white',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingTop: 16,
    opacity: '80%',
    width: '80%'
  } as React.CSSProperties,
  screenshotsDiv: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 15,
    paddingTop: 30,
    paddingBottom: 30,
    height: 500
  } as React.CSSProperties,
  screenshotStyle: {
    height: 400,
    width: 'auto',
    borderRadius: 5
  } as React.CSSProperties,
  testimonialText: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    alignSelf: 'center'
  } as React.CSSProperties
};

export default WorkRow;
