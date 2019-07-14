import React, { Component } from 'react'
import { Button} from 'react-mdl';



class Nextbutton extends Component {
  render() {
    return (
      <div>
      
        <Button onClick={function () { alert("click"); }}  style={{background: '#00C853'}} raised accent ripple>Next</Button>


       

      </div>
    )
  }
}


export default Nextbutton;