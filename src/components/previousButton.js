import React, {Component} from 'react'

class previousButton extends Component {
    render() {
      return (
        <button className="previousButton">
          {this.props.value}
        </button>
      );
    }
  }



  export default previousButton;