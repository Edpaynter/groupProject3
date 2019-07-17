import React from 'react';
import { Button} from 'react-mdl';




function Nextbutton(props) {

    return (
      <div>
        
        
        <Button onClick={props.onClick }  style={{background: 'rgba(0, 0, 0, 0.8)', fontSize: 20, color:'white'}} raised accent ripple>
          Next {props.increment + 1}
         </Button>

        
       
          
      </div>
      
    );
  
}


export default Nextbutton;