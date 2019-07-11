const quizDictionary = {
    Html : 
    {
        name: "HTML test",
        questions: 5,
        quiz_questions: [
            {
                quiz: "What is abbreviation of HTML?",
                option1: "Hyper Type Multi Language",
                option2: "Higher Text Multiple Language",
                option3: "Hyper Text Markup Language",
                answer:  "Hyper Text Markup Language"
            },
            {
                quiz: "How many types of markup in HTML?",
                option1: "Both",
                option2: "1 - opening and closing markup only",
                option3: "1 - self closing markups only",
                answer: "1"
            },
            {
                quiz: "<iframe> is HTML5 markup",
                option1: "False",
                option2: "True",
                option3: "Neither true nor false",
                answer: "True"
            },
            {
                quiz: "<div> and <span> are inline elements?",
                option1: "True",
                option2: "False",
                option3: "Neither True nor false",
                answer: "Neither True nor false"
            },
            {
                quiz: "HTML must need body markup. Why? Because:",
                option1: "It did'nt needs to show the markups inside it.",
                option2: "It needs to show the markups inside it.",
                option3: "It needs <head> element",
                answer: "It needs to show the markups inside it.",
            }
        ]
    },



   
    CSS : [
        {
            name: "Test 1",
            questions: 10,
            quiz_questions: [
                {
                    quiz: "What does CSS stand for?",
                    option1: "Colorful Style Sheets",
                    option2: "Creative Style Sheets",
                    option3: "Cascading Style Sheets",
                    answer: "3"
                },
                {
                    quiz: "Where in an HTML document is the correct place to refer to an external style sheet?",
                    option1: "In the <head> section",
                    option2: "At the end of the document",
                    option3: "In the <body> section",
                    answer: "1"
                },
                {
                    quiz: "Which HTML tag is used to define an internal style sheet?",
                    option1: "<script>",
                    option2: "<style>",
                    option3: "<css>",
                    answer: "2"
                },
                {
                    quiz: "Which is the correct CSS syntax?",
                    option1: "{body;color:black;}",
                    option2: "body:color=black;",
                    option3: "body {color: black;}",
                    answer: "3"
                },
                {
                    quiz: "How do you insert a comment in a CSS file?",
                    option1: "' this is a comment",
                    option2: "// this is a comment",
                    option3: "/* this is a comment */",
                    answer: "3"
                },
                {
                    quiz: "Which property is used to change the background color?",
                    option1: "color",
                    option2: "bgcolor",
                    option3: "background-color",

                    answer: "3"
                },
                {
                    quiz: "Which CSS property controls the text size?",
                    option1: "font-size",
                    option2: "text-style",
                    option3: "text-size",
                    answer: "1"
                },
                {
                    quiz:
                        "What is the correct CSS syntax for making all the <p> elements bold?",
                    option1: '<p style="text-size:bold;">',
                    option2: "p {text-size:bold;}",
                    option3: "p {font-weight:bold;}",
                    answer: "3"
                },
                {
                    quiz: "How do you display hyperlinks without an underline?",
                    option1: "a {decoration:no-underline;}",
                    option2: "a {text-decoration:no-underline;}",
                    option3: "a {text-decoration:none;}",
                    answer: "3"
                },
                {
                    quiz: "How do you make each word in a text start with a capital letter?",
                    option1: "transform:capitalize",
                    option2: "text-transform:capitalize",
                    option3: "You can't do that with CSS",
                    answer: "2"
                }
            ]
        }]
}

export default quizDictionary;