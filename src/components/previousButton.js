import React, {Component} from 'react'

import { Button} from 'react-mdl';



class Backbutton extends Component {
  render() {
    return (
      <div>
      
        <Button onClick={function () { alert("click"); }}  style={{background: '#418df0'}} raised accent ripple>Back</Button>


       

      </div>
    )
  }
}


export default Backbutton;