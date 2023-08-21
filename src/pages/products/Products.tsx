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
              justifyContent: 'row',
              alignItems: 'center',
              padding: 30,
              alignContent: 'center'
            }}
          >
            <img
              style={{ width: 50, height: '100%', alignSelf: 'center' }}
              src={iconImages('./WFHTax.png')}
              alt={'WFHTaxImage'}
            />
            <h1 style={{ margin: 0, fontSize: 20 }}>Work From Home Tax</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    margin: 30
  } as React.CSSProperties
};

export default Products;
