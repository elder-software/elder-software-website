import React from 'react';

const Products: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, []);

  const resize = () => setIsMobile(window.innerWidth <= 1000);

  return (
    <div style={styles.mainDiv}>
      <div style={styles.greyInnerDiv}>
        <div style={styles.greyInnerDiv2}>
          <div style={styles.titleDiv}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'row',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  padding: 30,
                  alignContent: 'center'
                }}
              >
                <h1 style={{ margin: 0, fontSize: 20 }}>About</h1>
              </div>
            </div>
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
    marginTop: 10
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
  greyInnerDiv2: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    border: '0px solid lightgrey',
    marginBottom: 0,
    paddingLeft: '20%',
    paddingRight: '20%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
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
