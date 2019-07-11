import React, {Component} from 'react';
import quizDictionary from './quizQuestions';


class InfoArea extends Component {
    constructor(props){
        super(props);
        this.state = {page: 0}
    }

    
    render() {
        return (
            <div className="banner-text">
<<<<<<< HEAD
              <h1>Info Area</h1>
              <hr/>
              <br/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <button className="btn btn-primary" itemID="previous-page">Previous</button>
              <button className="btn btn-primary" itemID="next-page">Next</button>
=======
              <h1>{quizDictionary.Html.name}</h1>
              <hr/>
              <br/>
              <div>{quizDictionary.Html.quiz_questions[0].quiz}</div>
>>>>>>> a767180... questions uploaded
            </div>
            
        )
    }
}

console.log(quizDictionary)
export default InfoArea;
