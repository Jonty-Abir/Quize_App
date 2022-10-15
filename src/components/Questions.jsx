import { nanoid } from "nanoid";
import Answers from "./Answres";
import Classes from "./styles/Question.module.css";
export default function Question({ answers = [] }) {
  return answers.map((answer, index) => {
    return (
      <div className={`${Classes.question}`} key={index}>
        <div className={`${Classes.qtitle}`} key={nanoid()}>
          <span className="material-icons-outlined"> help_outline </span>
          {answer.title}
        </div>
        <Answers input={false} opstions={answer.options} />
      </div>
    );
  });
}
