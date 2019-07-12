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
              <h1>{quizDictionary.Html.name}</h1>
              <hr/>
              <br/>
              <div>{quizDictionary.Html.quiz_questions[0].quiz}</div>
            </div>
            
        )
    }
}

console.log(quizDictionary)
export default InfoArea;
