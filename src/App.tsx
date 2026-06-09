import QuestionField from "./question-field.tsx";
import questionList from "./question-list.tsx";

function App() {
  return (
    <div>
      <h1>Sample Math Problems</h1>
      <div id="app">
        {questionList.map((question, i) => <QuestionField key={i} question={question} id={i} />)}
      </div>
    </div>
  )
}

export default App
