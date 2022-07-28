import React from "react"
import ReactDOM from "react-dom"
import Styles from "./Styles.css"
import StartQuizScreen from "./StartQuizScreen"

export default function App() {
  const [quizStarted, setQuizStarted] = React.useState(true)
  const [quizData, setQuizData] = React.useState([])

React.useEffect(() => {
  console.log("Effect used")
  fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
    .then(res => res.json())
    .then(data => setQuizData(data))
}, [])


function checkAnswers(){

}

function openQuiz(){
  setQuizStarted(!quizStarted)
}

  return (
    <main>
      {
      quizStarted ? 
      <div>
        <pre>{JSON.stringify(quizData, null, 2)}</pre>
        <button className="check-answers" onClick={checkAnswers}>Check Answers</button>
      </div> :
      <StartQuizScreen/>
          }
      </main>
  )
}

// <ul>
// {quizData.map(quiz => (
//   <li>{quiz.question}</li>
// ))}
// </ul>