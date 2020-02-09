import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const WorkRow = ({
  text,
  logoImage,
  technologies,
  features,
  featureIcons,
  title,
  testimonial,
  testimonialAuthor,
  isMobile
}) => {
  const renderWorkInfo = () => {
    let rows = [];
    for (let i = 0; i < features.length; i++) {
      rows.push(
        <div
          style={styles.workInfoDiv}>
          <img
            style={{ width: 30, height: 30, alignSelf: 'center' }}
            src={require(`../assets/icons/${featureIcons[i]}.png`)}
            alt={logoImage}
          />
          <div style={{
            alignSelf: 'center',
            marginInlineStart: 10
          }}>{features[i]}</div>
        </div>
      )
    }

    return rows;
  }

  return (
    <div style={styles.fullRowDiv}>
      <div style={styles.mainGreyDiv}>
        <div style={{
          ...styles.rowHeadingDiv,
          alignSelf: isMobile ? 'stretch' : 'start',
        }}>
          <img
            style={{ width: 50, height: '100%', alignSelf: 'center' }}
            src={require(`../assets/companyLogos/${logoImage}.png`)}
            alt={logoImage}
          />
          <h1 style={styles.companyNameText}>{text}</h1>
        </div>

        <div style={styles.technologiesDiv}>
          {technologies.map((value) => {
            return (
              <div
                key={value}
                style={{ marginRight: 10 }}>
                {value}
              </div>
            );
          })}
        </div>
      </div>


      <h4 style={{ marginTop: 0, marginLeft: 30, fontSize: 16, }}>
        {title}
      </h4>

      <div style={styles.workDetailsDiv}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          <div style={styles.appFeaturesDiv}>
            {renderWorkInfo()}
          </div>

          <div style={styles.screenshotsDiv}>
            <img
              style={styles.screenshotStyle}
              src={require(`../assets/screenshots/${logoImage}SS1.png`)}
              alt={logoImage}
            />
            <img
              style={styles.screenshotStyle}
              src={require(`../assets/screenshots/${logoImage}SS2.png`)}
              alt={logoImage}
            />
          </div>

        </div>

        {testimonial ?
          <div>
            <div style={styles.testimonialText}>
              <FaQuoteLeft style={{ height: 30, width: 30, marginRight: 20 }} />
              {testimonial}
            </div>
            <div style={styles.testimonialText}>
              {testimonialAuthor}
            </div>
          </div>
          : null}
      </div>
    </div>
  );
}


const styles = {
  fullRowDiv: {
    borderColor: 'black',
    background: '#e8e8e8',
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    padding: 5,
    WebkitBoxShadow: "2px 2px 2px #DFDFDF",
    MozBoxShadow: "2px 2px 2px #DFDFDF",
    boxShadow: "2px 2px 2px #DFDFDF"
  },
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
    fontWeight: '100'
  },
  workInfoDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'start',
    paddingBottom: 30
  },
  rowHeadingDiv: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 30,
    padding: 20,
    marginBottom: 10,
    borderRadius: 15
  },
  companyNameText: {
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 0,
    marginBottom: 0,
    fontSize: 20
  },
  technologiesDiv: {
    display: 'flex',
    alignSelf: 'start',
    flexDirection: 'row',
    paddingInlineStart: 30,
    paddingBottom: 30
  },
  workDetailsDiv: {
    display: 'flex',
    flex: 1,
    background: 'white',
    flexDirection: 'column',
    borderRadius: 15,
    border: '1px solid #f2f2f2',
  },
  appFeaturesDiv: {
    display: 'flex',
    flex: 1,
    background: 'white',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 30,
  },
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
    paddingBottom: 30,
  },
  screenshotStyle: {
    display: 'flex',
    width: '40%',
    height: 'auto',
    alignSelf: 'center',
    border: '1px solid lightgrey',
    borderRadius: 5,
  },
  testimonialText: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    alignSelf: 'center'
  }
}
export default WorkRow;