import React from "react"

export default function StartQuizScreen (props) {
    return(
    <div> 
        <h1 className="quiz-title">Quizzical</h1>
        <h3 className="description">Answer fun questions and test your knowledge in this trivia quiz.</h3>
        <button className="start-quiz-button" onClick={props.openQuiz}>Start quiz</button>
      </div>
    )
}
    