import React from 'react';
import { Button} from 'react-mdl';


function Nextbutton(props) {

    return (
      <div>
        
        
        <Button onClick={props.onClick }  style={{background: '#00C853'}} raised accent ripple>
          Next {props.increment + 1}
         </Button>

        
       
          
      </div>
      
    );
  
}


export default Nextbutton;