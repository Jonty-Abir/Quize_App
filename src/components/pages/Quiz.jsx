import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useQuestion from "../../Hooks/useQuestion";
import Answers from "../Answres";
import { useAuth } from "../contex/AuthContex";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

// declear initialState
const initialState = 0;
// reducer funtion
const reduccer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const { currentUser } = useAuth();
  const history = useHistory();
  const { location } = useHistory();
  const { state } = location;
  const { id } = useParams();
  const { loading, error, questions } = useQuestion(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // use reduccer
  const [qna, dispatch] = useReducer(reduccer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);
  // onHandleChange
  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  // handler when user click next button to next question
  function next() {
    if (currentQuestion <= questions.length) {
      setCurrentQuestion((preCurrentQuestion) => preCurrentQuestion + 1);
    }
  }
  // handler when user click previous button to previous question
  function prev() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((preCurrentQuestion) => preCurrentQuestion - 1);
    }
  }
  // calculate the progress bar
  const parcentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  // submit quize
  async function submit() {
    const { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });
    history.push({
      pathname: `/result/${id}`,
      state: {
        qna,
      },
    });
  }
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            opstions={qna[currentQuestion].options}
            onHandle={handleAnswerChange}
            input={true}
          />

          <ProgressBar
            next={next}
            prev={prev}
            progress={parcentage}
            submit={submit}
          />
          <MiniPlayer url={id} title={state.videoTitle} />
        </>
      )}
    </>
  );
}
