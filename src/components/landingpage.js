import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import InfoArea from './infoarea';
import TestArea from './testarea';

class Landing extends Component {
  render() {
    return (
    
      <div style={{ width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            /> */}

            <div className="banner-text">
              <h1 style={{fontSize: 60, fontFamily: 'Tahoma', fontWeight: 'normal'}}>iCodeOnline</h1>
              <hr />
              <br />
              <p style={{fontSize: 30}}>Learn HTML | CSS </p>

            </div>
            
            <InfoArea/>

            <TestArea/>

          </Cell>
        </Grid>
      </div>
     
    )
  }
}

export default Landing;
