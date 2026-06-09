import {useState} from "react";
import type {Question} from "./question.ts";

export default function QuestionField({ question, id }: { question: Question, id: number }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="question">
      <p>{question.text}</p>
      <div className="answers">
        {question.answers.map((answer, i) => {
          let className = "answer";
          if (selected !== null) {
            if (i === question.correct) {
              className += " correct";
            } else if (i === selected) {
              className += " incorrect";
            }
          }

          return (
            <label key={i} className={className}>
              <input
                type="radio"
                name={`answer-${id}`}
                value={i}
                checked={selected === i}
                onChange={() => setSelected(i)}
                disabled={selected !== null}
              />
              {answer}
            </label>
          );
        })}
      </div>
    </div>
  );
}