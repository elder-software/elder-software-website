import React from 'react';
import useIsMobile from '../../hooks/useIsMobile';

const Products: React.FC = () => {
  const isMobile = useIsMobile();

  const iconImages = require.context(
    '../../assets/appIcons',
    true,
    /\.(png|jpe?g|svg)$/
  );

  return (
    <div style={styles.mainDiv}>
      <div style={styles.greyInnerDiv}>
        <div style={styles.titleDiv}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 15
            }}
          >
            <img
              style={{
                width: 50,
                height: '100%',
                alignSelf: 'center'
              }}
              src={iconImages('./WFHTax.png')}
              alt={'WFHTaxImage'}
            />
            <h1
              style={{
                alignSelf: 'center',
                marginLeft: 20,
                marginTop: 0,
                marginBottom: 0,
                fontSize: 20
              }}
            >
              Work From Home Tax
            </h1>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flex: 1,
            background: 'white',
            flexDirection: 'column',
            borderRadius: 16,
            border: 1,
            margin: 32,
            padding: 20
          }}
        >
          <body style={{ textAlign: 'center' }}>{wfhTaxText}</body>
          <span
            style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              margin: '20px 0'
            }}
          >
            {require('!raw-loader!./privacyPolicy.txt').default}
          </span>
        </div>
      </div>
    </div>
  );
};

const wfhTaxText =
  'Aimed at people that are permanent employees that work at home. ' +
  'This app helps you to calculate your work from home tax deduction.';

const styles = {
  mainDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop: 10,
    margin: 16
  } as React.CSSProperties,
  greyInnerDiv: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15,
    WebkitBoxShadow: '2px 2px 2px #DFDFDF',
    MozBoxShadow: '2px 2px 2px #DFDFDF',
    boxShadow: '2px 2px 2px #DFDFDF',
    background: '#e8e8e8',
    padding: 5
  } as React.CSSProperties,
  titleDiv: {
    display: 'flex',
    justifyContent: 'row',
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 15,
    background: 'white',
    margin: 30,
    marginBottom: 0
  } as React.CSSProperties
};

export default Products;
