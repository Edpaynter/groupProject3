import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import quizDictionary from './quizQuestions';
import Nextbutton from './nextButton';
import Backbutton from './previousButton';
import TestButton from './testButton';



class InfoArea extends Component {
    constructor(props) {
        super(props);
        this.state = {questions : quizDictionary.Html.quiz_questions };
    }

    // saySomething = (items) => {
    //     return items[Math.floor(Math.random() * items.length)];
    // };

    // num = this.saySomething(this.state.questions);


    render() {
        return (
            <div className="banner-text">
                <h1>{quizDictionary.Html.name}</h1>
                <p>{quizDictionary.Html.quiz_questions[4].quiz}</p>
                <h1>{quizDictionary.Html.quiz_questions[4].answer}</h1>
                {/* <h1>{quizDictionary.Html.quiz_questions[this.num].answer}</h1> */}
                <Grid className="demo-grid-1">
                    <Cell col={5}><Backbutton></Backbutton></Cell>
                    <Cell col={3}><Nextbutton></Nextbutton> </Cell>
                    <Cell col={3}> <TestButton></TestButton></Cell>
                </Grid>



            </div>

        )
    }
}

console.log(quizDictionary.Html.quiz_questions[1].option2)
export default InfoArea;
