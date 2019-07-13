import React, {Component} from 'react'

class nextButton extends Component {
    render() {
      return (
        <button className="nextButton">
          {this.props.value}
        </button>
      );
    }
  }



  export default nextButton;