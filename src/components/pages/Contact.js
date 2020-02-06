import React, { Component } from 'react';
import { EmailIcon, PhoneIcon, GithubIcon } from '../common/contacticons';

class Contact extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        marginTop: 10,
      }}>
        <div style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 15,
          webkitBoxShadow: "2px 2px 2px #DFDFDF",
          mozBoxShadow: "2px 2px 2px #DFDFDF",
          boxShadow: "2px 2px 2px #DFDFDF",
          background: '#e8e8e8',
          padding: 5
        }}>
          <div style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            border: '0px solid lightgrey',
            marginBottom: 0,
            paddingLeft: '20%',
            paddingRight: '20%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'row',
              alignSelf: 'center',
              flexDirection: 'column',
              borderRadius: 15,
              background: 'white',
              margin: 30
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'row',
                alignItems: 'center',
              }}>
                <div style={{
                  padding: 30,
                  alignContent: 'center'
                }}>
                  {/* <h1 style={{ margin: 0 }}></h1> */}
                  <h1 style={{ margin: 0 }}>Contact</h1>
                </div>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignContent: 'center',
            border: '1px solid #f2f2f2',
            marginTop: 0,
            borderRadius: 15,
            justifyContent: 'space-around',
            width: '100%',
            background: 'white',
            paddingTop: 30,
            paddingBottom: 30,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'column',
              flex: 1,
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 30,
            }}>
              <EmailIcon size={100} />
              <div style={styles.rowTextStyle}>
                james@elder-software.com
              </div>
            </div>

            <div style={styles.rowStyle}>
              <PhoneIcon size={100} />
              <div style={styles.rowTextStyle}>
                +64 27 6930 729
              </div>
            </div>

            <div style={styles.rowStyle}>
              <GithubIcon size={100} />
              <div style={styles.rowTextStyle}>
                Check out code samples on GitHub
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  rowStyle: {
    display: 'flex',
    justifyContent: 'column',
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30
  },
  rowTextStyle: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    fontSize: 16,
    fontWeight: '100',
    opacity: '80%'
  }
}


export default Contact;