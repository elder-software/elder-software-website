import React from 'react';

const WorkRow = ({
  text,
  logoImage,
  technologies,
  features,
  featureIcons
}) => {
  const renderWorkInfo = () => {
    let rows = [];
    for (let i = 0; i < features.length; i++) {
      rows.push(
        <div style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
          alignSelf: 'start',
          paddingInlineStart: 30,
        }}>
          <img
            style={{ width: 30, height: 30, alignSelf: 'center' }}
            src={require(`../assets/icons/${featureIcons[i]}.png`)}
            alt={logoImage}
          />
          <h6 style={{
            alignSelf: 'center',
            marginInlineStart: 10
          }}>{features[i]}</h6>
        </div>
      )
    }

    return rows;
  }

  return (
    <div style={{
      borderColor: 'black',
      // border: '2px solid black',
      background: 'lightgrey',
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 15,
      webkitBoxShadow: "2px 2px 2px #DFDFDF",
      mozBoxShadow: "2px 2px 2px #DFDFDF",
      boxShadow: "2px 2px 2px #DFDFDF"
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'start',
        background: 'lightgrey',
        borderColor: 'black',
        borderWidth: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      }}>
        <div style={{
          display: 'flex',
          alignSelf: 'start',
          flexDirection: 'row'
        }}>
          <div
            style={{
              display: 'flex',
              backgroundColor: 'white',
              margin: 30,
              padding: 10,
              // border: '1px solid black',
              borderRadius: 15
            }}
          >
            <img
              style={{
                width: 50, height: 50, alignSelf: 'center'

              }}
              src={require(`../assets/companyLogos/${logoImage}.png`)}
              alt={logoImage}
            />
          </div>
          <h1 style={{ alignSelf: 'center' }}>{text}</h1>
        </div>

        <div
          style={{
            display: 'flex',
            alignSelf: 'start',
            flexDirection: 'row',
            paddingInlineStart: 30
          }}
        >
          {technologies.map((values) => {
            return <div style={{
              width: 50,
              height: 50,
              alignSelf: 'center',
              marginRight: 30,
              marginBottom: 20,
            }}>
              <img
                style={{
                  width: 'auto',
                  height: '100%',
                }}
                src={require(`../assets/technologiesLogos/${values}.png`)}
                alt={logoImage}
              />
            </div>
          })}
        </div>
      </div>

      <div style={{
        display: 'flex',
        background: 'white',
        borderRadius: 15,
        flexDirection: 'column',
        border: '1px solid lightgrey',
      }}>
        {renderWorkInfo()}
      </div>
    </div>
  );
}

export default WorkRow;