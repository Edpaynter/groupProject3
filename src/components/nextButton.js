import React, { Component } from 'react'



class Nextbutton extends Component {
  render() {
    return (

      <button onClick={function () { alert("click"); }} sclassName="nextButton">
        Hello
        </button>
    )
  }
}


export default Nextbutton;