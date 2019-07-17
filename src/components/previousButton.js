import React from 'react'

import { Button} from 'react-mdl';



function Backbutton (props) {

    return (
      <div>
      
        <Button onClick={props.onClick }  style={{background: 'rgba(0, 0, 0, 0.8)', fontSize: 20, color:'white'}} raised accent ripple>Back {props.increment }</Button>


       

      </div>
    )
  
}


export default Backbutton;