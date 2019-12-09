import React from 'react';

const WorkRow = ({
  text,
  logoImage,
  platforms,
  languages,
  info
}) => {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'start',
        background: 'lightgrey',
      }}>
        <div style={{
          display: 'flex',
          alignSelf: 'start',
          flexDirection: 'row'
        }}>
          <img
            style={{ width: 50, height: 50, alignSelf: 'center', padding: 30 }}
            src={require(`../assets/companyLogos/${logoImage}.png`)}
            alt={logoImage}
          />
          <h1 style={{ alignSelf: 'center'}}>{text}</h1>
        </div>
        <div
          style={{
            display: 'flex',
            alignSelf: 'start',
            flexDirection: 'column',
            paddingInlineStart: 30
          }}
        >
          <h2>
            {platforms}
          </h2>
          <h4>
            {languages}
          </h4>
        </div>
      </div>

      <div>
        {info.map((value) => {
          return <h6 style={{marginInlineStart: 30}}>{value}</h6>
        })}
      </div>

    </div>
  );
}

export default WorkRow;