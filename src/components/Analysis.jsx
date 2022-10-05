import Questions from "./Questions";
import Classes from "./styles/Analysis.module.css";
export default function Analysis({answers}){
    return(
        <div className={`${Classes.analysis}`}>
          <h1>Question Analysis</h1>
          <Questions answers={answers} />
          </div>
    );
}