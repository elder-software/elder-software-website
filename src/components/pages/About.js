import React, { Component } from 'react';
import { NewZealandIcon, CertificateIcon, MusicIcon, SurfSkateIcon, ComputerIcon, CircuitBoardAboutIcon } from '../common/abouticons';

class About extends Component {
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
              // webkitBoxShadow: "2px 2px 2px #DFDFDF",
              // mozBoxShadow: "2px 2px 2px #DFDFDF",
              // boxShadow: "2px 2px 2px #DFDFDF"
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
                  <h1 style={{ margin: 0 }}>About</h1>
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
              <NewZealandIcon size={100} />
              <div style={styles.rowTextStyle}>
                New Zealand, Mount Maunganui is where I was born and raised.
              </div>
            </div>
 
            <div style={styles.rowStyle}>
              <CertificateIcon size={100} />
              <div style={styles.rowTextStyle}>
                I studied Electrical and Electronic Engineering and obtained
                a BEng (Honours) from the University of Canterbury.
                I directed my course to have a heavy focus on programming and
                embedded systems.
              </div>
            </div>

            <div style={styles.rowStyle}>
              <CircuitBoardAboutIcon size={100} />
              <div style={styles.rowTextStyle}>
                After my studies I was employed as a project manager for 2 years 
                at a switchboard company. There I also designed, programmed
                and manufactured embedded systems.
              </div>
            </div>

            <div style={styles.rowStyle}>
              <ComputerIcon size={100} />
              <div style={styles.rowTextStyle}>
                Using the skills I developed from my degree and previous 
                work I learnt how to develop mobile applications and have been 
                freelancing this work since.
              </div>
            </div>

            <div style={styles.rowStyle}>
              <MusicIcon size={100} />
              <div style={styles.rowTextStyle}>
                I have played music since a young age, starting on the piano and 
                moving on to the guitar, vocals and drums at a later age. 
                I have a lot of experience composing and performing with bands and 
                by myself.
              </div>
            </div>

            <div style={styles.rowStyle}>
              <SurfSkateIcon size={100} />
              <div style={styles.rowTextStyle}>
                Growing up close to the beach has resulted in surfing and 
                skateboard being my favourite sports.
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


export default About;