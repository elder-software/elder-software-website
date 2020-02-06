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
  testimonialAuthor
}) => {
  const renderWorkInfo = () => {
    let rows = [];
    for (let i = 0; i < features.length; i++) {
      rows.push(
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'start',
          paddingBottom: 30
        }}>
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
    <div style={{
      borderColor: 'black',
      // border: '2px solid black',
      background: '#e8e8e8',
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 15,
      padding: 5,
      webkitBoxShadow: "2px 2px 2px #DFDFDF",
      mozBoxShadow: "2px 2px 2px #DFDFDF",
      boxShadow: "2px 2px 2px #DFDFDF"
    }}>
      <div style={{
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
      }}>
        <div style={{
          display: 'flex',
          alignSelf: 'start',
          flexDirection: 'row',
          backgroundColor: 'white',
          margin: 30,
          padding: 20,
          marginBottom: 10,
          borderRadius: 15
        }}>
          <img
            style={{
              width: 50, height: 50, alignSelf: 'center'
            }}
            src={require(`../assets/companyLogos/${logoImage}.png`)}
            alt={logoImage}
          />
          <h1 style={{ alignSelf: 'center', marginLeft: 20, marginTop: 0, marginBottom: 0 }}>{text}</h1>
        </div>

        <div
          style={{
            display: 'flex',
            alignSelf: 'start',
            flexDirection: 'row',
            paddingInlineStart: 30,
            paddingBottom: 30
          }}
        >
          {technologies.map((value) => {
            return <div style={{ marginRight: 10 }}>{value}</div>;
          })}
        </div>
      </div>


      <h4 style={{
        marginTop: 0,
        marginLeft: 30,
        fontSize: 18,
      }}>
        {title}
      </h4>

      <div style={{
        display: 'flex',
        flex: 1,
        background: 'white',
        flexDirection: 'column',
        borderRadius: 15,
        border: '1px solid #f2f2f2',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <div style={{
            display: 'flex',
            flex: 1,
            background: 'white',
            borderRadius: 15,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingLeft: 30,
            paddingTop: 30,
            paddingBottom: 30
          }}>
            {renderWorkInfo()}
          </div>

          <div style={{
            display: 'flex',
            flex: 1,
            background: 'white',
            borderRadius: 15,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center'
          }}>
            <img
              style={{
                display: 'flex',
                width: '30%',
                height: 'auto',
                alignSelf: 'center',
                border: '1px solid lightgrey',
                borderRadius: 5,
                margin: '5%',
                marginTop: 30
              }}
              src={require(`../assets/screenshots/${logoImage}SS1.png`)}
              alt={logoImage}
            />
            <img
              style={{
                display: 'flex',
                width: '30%',
                height: 'auto',
                alignSelf: 'center',
                border: '1px solid lightgrey',
                borderRadius: 5,
                margin: '5%',
                marginTop: 30

              }}
              src={require(`../assets/screenshots/${logoImage}SS2.png`)}
              alt={logoImage}
            />
          </div>

        </div>

        {testimonial ?
          <div>
            <div style={{
              paddingLeft: '20%',
              paddingRight: '20%',
              paddingBottom: 20,
              alignSelf: 'center',
            }}><FaQuoteLeft style={{ height: 30, width: 30, marginRight: 20 }} />
              {testimonial}
            </div>
            <div style={{
              paddingLeft: '20%',
              paddingRight: '20%',
              paddingBottom: 20,
              alignSelf: 'center',
            }}>
              {testimonialAuthor}
            </div>
          </div>
          : null}
      </div>
    </div>
  );
}

export default WorkRow;