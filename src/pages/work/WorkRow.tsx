import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { WorkInfoProps } from './WorkInfo';
import useIsMobile from '../../hooks/useIsMobile';

const WorkRow: React.FC<WorkInfoProps> = ({
  name,
  icon,
  technologies,
  description,
  title,
  testimonial,
  testimonialAuthor
}) => {
  const isMobile = useIsMobile();

  function importAll(
    r: __WebpackModuleApi.RequireContext
  ): Record<string, string> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const images: Record<string, string> = {};
    r.keys().forEach((item) => {
      images[item.replace(/^\.\//, '')] = r(item);
    });
    return images;
  }

  // const companyLogoImages = importAll(
  //   require.context('../../assets/companyLogos', true, /\.(png|jpe?g|svg)$/)
  // );
  const screenshotImages = importAll(
    require.context('../../assets/screenshots', true, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div style={styles.fullRowDiv}>
      <div style={styles.mainGreyDiv}>
        <div
          style={{
            ...styles.rowHeadingDiv,
            alignSelf: isMobile ? 'stretch' : 'start'
          }}
        >
          <img
            style={{ width: 50, height: '100%', alignSelf: 'center' }}
            src={icon}
            alt={icon}
          />
          <h1 style={styles.companyNameText}>{name}</h1>
        </div>

        <div style={styles.technologiesDiv}>
          {technologies.map((value) => {
            return (
              <div key={`${name}:technology`} style={{ marginRight: 10 }}>
                {value}
              </div>
            );
          })}
        </div>
      </div>

      <h4 style={{ marginTop: 0, marginLeft: 30, fontSize: 16 }}>{title}</h4>

      <div style={styles.workDetailsDiv}>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          <div style={styles.appFeaturesDiv}>{description}</div>

          <div style={styles.screenshotsDiv}>
            <img
              style={styles.screenshotStyle}
              src={screenshotImages[`${icon}SS1.png`]}
              alt={icon}
            />
            <img
              style={styles.screenshotStyle}
              src={screenshotImages[`${icon}SS2.png`]}
              alt={icon}
            />
          </div>
        </div>

        {testimonial ? (
          <div>
            <div style={styles.testimonialText}>
              <FaQuoteLeft style={{ height: 20, width: 20, marginRight: 20 }} />
              {testimonial}
            </div>
            <div style={styles.testimonialText}>{testimonialAuthor}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const styles = {
  fullRowDiv: {
    borderColor: 'black',
    background: '#e8e8e8',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    padding: 5,
    WebkitBoxShadow: '2px 2px 2px #DFDFDF',
    MozBoxShadow: '2px 2px 2px #DFDFDF',
    boxShadow: '2px 2px 2px #DFDFDF'
  } as React.CSSProperties,
  mainGreyDiv: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
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
    backgroundColor: 'white',
    margin: 30,
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
    alignSelf: 'start',
    flexDirection: 'row',
    paddingInlineStart: 30,
    paddingLeft: 30,
    paddingBottom: 30
  } as React.CSSProperties,
  workDetailsDiv: {
    display: 'flex',
    flex: 1,
    background: 'white',
    flexDirection: 'column',
    borderRadius: 15,
    border: '1px solid #f2f2f2'
  } as React.CSSProperties,
  appFeaturesDiv: {
    display: 'flex',
    flex: 1,
    background: 'white',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 30
  } as React.CSSProperties,
  screenshotsDiv: {
    display: 'flex',
    flex: 1,
    background: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    alignItems: 'space-around',
    paddingTop: 30,
    paddingBottom: 30
  } as React.CSSProperties,
  screenshotStyle: {
    display: 'flex',
    width: '40%',
    height: 'auto',
    alignSelf: 'center',
    border: '1px solid lightgrey',
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
