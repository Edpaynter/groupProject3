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
              
              <p>{quizDictionary.Html.quiz_questions[0].quiz}</p>
              <h1>{quizDictionary.Html.quiz_questions[0].answer}</h1>
            </div>
            
        )
    }
}

console.log(quizDictionary.Html.quiz_questions[1].option2)
export default InfoArea;
