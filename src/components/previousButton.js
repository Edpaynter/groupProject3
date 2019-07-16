import React from 'react'

import { Button} from 'react-mdl';



function Backbutton (props) {

    return (
      <div>
      
        <Button onClick={props.onClick }  style={{background: '#418df0'}} raised accent ripple>Back {props.increment }</Button>


       

      </div>
    )
  
}


export default Backbutton;