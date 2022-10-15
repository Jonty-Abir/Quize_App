import _ from "lodash";
import { useHistory, useParams } from "react-router-dom";
import useAnswers from "../../Hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { location } = useHistory();
  const { id } = useParams();
  const { state } = location;
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);
  // calculate score
  function calculate() {
    let score = 0;
    answers.forEach((questions, index1) => {
      let currectIndex = [];
      let checkedIndex = [];
      // create two array for comparire
      questions.options.forEach((options, index2) => {
        if (options.correct) currectIndex.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          options.checked = true;
        }
      });
      if (_.isEqual(currectIndex, checkedIndex)) {
        score += 5;
      } 
    });
    return score;
  }
  const userScore = calculate();
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error</div>}
      {answers && answers.length && (
        <>
          <Summary userScore={userScore} naq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
