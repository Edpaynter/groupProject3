import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import quizDictionary from './quizQuestions';
import Nextbutton from './nextButton';
import Backbutton from './previousButton';



class InfoArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increment: 0,
        };
    }

    IncrementItem = () => {
        if (this.state.increment < quizDictionary.Html.quiz_questions.length - 1) {
            this.setState({ increment: this.state.increment + 1 });
        } else {
            this.setState({ increment: 0 });
        }

    }

    DecrementItem = () => {
        if (this.state.increment > 0) {
            this.setState({ increment: this.state.increment - 1 });
        } else {
            this.setState({ increment: 0 });
        }

    }



    render() {
        return (

            <div style={{ background: 'rgba(0, 0, 0, 0.3)' }} className="banner-text">
                <h1 style={{ fontSize: 60, fontFamily: "Tahoma", fontWeight: 'normal' }} >{quizDictionary.Html.name}</h1>
                <p> ____________________________________________________________________</p>
                <p style={{ fontSize: 40, fontFamily: "Gill sans", fontWeight: 'normal' }}>{quizDictionary.Html.quiz_questions[this.state.increment].quiz}</p>
                <h1 style={{ fontSize: 30, fontFamily: "Gill sans", fontWeight: 'normal' }}>{quizDictionary.Html.quiz_questions[this.state.increment].answer}</h1>


                <Grid className="demo-grid-1">
                    <Cell col={5}><Backbutton onClick={this.DecrementItem} increment={this.state.increment} ></Backbutton></Cell>
                    <Cell col={3}><Nextbutton onClick={this.IncrementItem} increment={this.state.increment}></Nextbutton> </Cell>
                </Grid>

            </div>
        )
    }
}

console.log(quizDictionary.Html.quiz_questions[1].option2)
export default InfoArea;
