import React, { Component } from 'react'

import { Chip, ChipContact } from 'react-mdl';



class TestButton extends Component {
  render() {
    return (
      <div>



        <Chip onClick={function () { alert("click"); }} style={{ background: '#418df0' }} >
          <ChipContact className="mdl-color--green mdl-color-text--white">*</ChipContact>
          TEST
        </Chip>


      </div>
    )
  }
}


export default TestButton;