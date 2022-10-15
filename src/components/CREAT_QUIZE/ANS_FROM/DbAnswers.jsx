import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  update
} from "firebase/database";
import { useState } from "react";
import AnimationBtn from "../../AnimationBtn";
import QuizeBtn from "../QuizeBtn";
import QuizeFrom from "../QuizeFrom";
import QuizeInput from "../QuizeInput";
import Classes from "./DbAnswer.module.css";
import SecPart from "./SecPert";
//
export default function DbAnswers() {
  // console.log("db");
  // console.log("db");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");
  const [no, setNo] = useState("");

  //
  const [optionArray, setOptionArray] = useState([]);
  const [titleOfQuestion, setTitleOfQuestion] = useState(null);
  // const [checkbox, setCheckBox] = useState("");
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(true);
  const [state3, setState3] = useState(true);
  const [state4, setState4] = useState(true);
  const [state5, setState5] = useState(true);
  const [state6, setState6] = useState(true);
  const [state7, setState7] = useState(true);
  const [state8, setState8] = useState(true);
  const [state9, setState9] = useState(true);
  const [state10, setState10] = useState(true);

  const [themesCondition, setThemesCondition] = useState(false);
  // const [answer, setAnswer] = useState({
  //   ans1: false,
  //   ans2: false,
  //   ans3: false,
  //   ans4: false,
  //   ans5: false,
  //   ans6: false,
  //   ans7: false,
  //   ans8: false,
  //   ans9: false,
  //   ans10: false,
  // });

  // importent varable are here
  const no2 = Number(no);

  // use Debounce
  let storeTimer;

  function debounce(fun, delay) {
    return function () {
      if (storeTimer) {
        clearInterval(storeTimer);
      } else {
        storeTimer = setTimeout(() => {
          fun();
        }, delay);
      }
    };
  }
  // onKeyDown funtion
  function onKeyDownFun() {
    clearInterval(storeTimer);
  }

  // onKeyUP funtion
  const onKeyUpFun = async () => {
    if(no2 === "" || no2 <= 0){
      setOptionArray([]);
      setTitleOfQuestion(null);
    }
    if (no2 > 0) {
      const db = getDatabase();
      const dbRef = ref(db, `quiz/${id}/questions/${"" + no2 - 1}`);
      const dbQuery = query(dbRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        if (id.length > 0) {
          setLoading(false);
          const snapShot = await get(dbQuery);
          if (snapShot.exists()) {
            if (snapShot.val() === null) {
              alert(`Your requested ${no} NO question was not exist`);
            } else {
              setTitleOfQuestion(snapShot.val().title);
              const data = snapShot.val().options;
              let optionArray1 = data.map((v) => {
                return v.title;
              });

              setOptionArray(optionArray1);
            }
          } else {
            alert("Enter a valid question no..!");
          }
        } else {
          throw Error("There was a problem!");
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
  };

  const onChange1 = (e) => {
    const check = e.target.checked;
    setState1(state1 ? false : check);
  };
  const onChange2 = (e) => {
    const check = e.target.checked;
    setState2(state2 ? false : check);
  };
  const onChange3 = (e) => {
    const check = e.target.checked;
    setState3(state3 ? false : check);
  };
  const onChange4 = (e) => {
    const check = e.target.checked;
    setState4(state4 ? false : check);
  };
  const onChange5 = (e) => {
    const check = e.target.checked;
    setState5(state5 ? false : check);
  };
  const onChange6 = (e) => {
    const check = e.target.checked;
    setState6(state6 ? false : check);
  };
  const onChange7 = (e) => {
    const check = e.target.checked;
    setState7(state7 ? false : check);
  };
  const onChange8 = (e) => {
    const check = e.target.checked;
    setState8(state8 ? false : check);
  };
  const onChange9 = (e) => {
    const check = e.target.checked;
    setState9(state9 ? false : check);
  };
  const onChange10 = (e) => {
    const check = e.target.checked;
    setState10(state10 ? false : check);
  };
  // console.log(state1,state2,state3,state4,state5,state6,state7,state8,state9,state10)
  // onSubmitFun fun
  const onSubmitFun = async (event) => {
    event.preventDefault();
    // console.log("i am usmitign");
    const db = getDatabase();
    const ansDbRef = ref(db, `answers/`);
    const ansQuary = query(ansDbRef, orderByKey());
    // const videoDbRef = ref(db, `videos/`);
    // const videoQuary = query(videoDbRef, orderByKey());
    const quizeDbRef = ref(db, `quiz/`);
    const quizeQuary = query(quizeDbRef, orderByKey());
    try {
      setError(false);
      setLoading(true);
      // all id from video node
      // const videoSnapShot = await get(videoQuary);
      const quizeSnapShot = await get(quizeQuary);
      const ansSnapShot = await get(ansQuary);
      // store all queary id's in array
      // const videoArray = Object.keys(videoSnapShot.val());
      const quizeArray = Object.keys(quizeSnapShot.val());
      const ansArray = Object.keys(ansSnapShot.val());
      // check the id is there or not
      // const haveInVideo = videoArray.includes(id);
      const haveInQuiz = quizeArray.includes(id);
      const haveInAnswers = ansArray.includes(id);

      if (haveInAnswers && haveInQuiz) {
        const ansDbRef = ref(db, `answers/${id}/questions/`);
        const ansSnapShot = await get(query(ansDbRef, orderByKey()));
        const length = Object.keys(ansSnapShot.val()).length || 0;
        const key = "" + length;
        const updatedObj2 = {
          [key]: {
            title: titleOfQuestion,
            options: [
              {
                title: optionArray[0],
                correct: state1,
              },
              {
                title: optionArray[1],
                correct: state2,
              },
              {
                title: optionArray[2],
                correct: state3,
              },
              {
                title: optionArray[3],
                correct: state4,
              },
              {
                title: optionArray[4],
                correct: state5,
              },
              {
                title: optionArray[5],
                correct: state6,
              },
              {
                title: optionArray[6],
                correct: state7,
              },
              {
                title: optionArray[7],
                correct: state8,
              },
              {
                title: optionArray[8],
                correct: state9,
              },
              {
                title: optionArray[9],
                correct: state10,
              },
            ],
          },
        };

        // console.log(updatedObj2);
        await update(query(ansDbRef, orderByKey()), updatedObj2);
        // await update(set(ansDbRef, orderByKey()), updatedObj2);

        // const snap = await get(query(ansDbRef, orderByKey()));
        // console.log(snap.val());
        setLoading(false);
        setOptionArray([]);
        setTitleOfQuestion(null);
        setId("");
        setNo("");
        // setAnswer({
        //   ans1: false,
        //   ans2: false,
        //   ans3: false,
        //   ans4: false,
        //   ans5: false,
        //   ans6: false,
        //   ans7: false,
        //   ans8: false,
        //   ans9: false,
        //   ans10: false,
        // });
        setState1(true);
        setState2(true);
        setState3(true);
        setState4(true);
        setState5(true);
        setState6(true);
        setState7(true);
        setState8(true);
        setState9(true);
        setState10(true);

        setThemesCondition(false);

        // alert("success!");
      } else {
        const updatedObj = {
          [id]: {
            questions: [
              {
                title: titleOfQuestion,
                options: [
                  {
                    title: optionArray[0],
                    correct: state1,
                  },
                  {
                    title: optionArray[1],
                    correct: state2,
                  },
                  {
                    title: optionArray[2],
                    correct: state3,
                  },
                  {
                    title: optionArray[3],
                    correct: state4,
                  },
                  {
                    title: optionArray[4],
                    correct: state5,
                  },
                  {
                    title: optionArray[5],
                    correct: state6,
                  },
                  {
                    title: optionArray[6],
                    correct: state7,
                  },
                  {
                    title: optionArray[7],
                    correct: state8,
                  },
                  {
                    title: optionArray[8],
                    correct: state9,
                  },
                  {
                    title: optionArray[9],
                    correct: state10,
                  },
                ],
              },
            ],
          },
        };
        const updateRef = ref(db, `answers/`);
        const updateDbQuery = query(updateRef, orderByKey());
        setLoading(true);
        await update(updateDbQuery, updatedObj);
        // const snap = await get(updateDbQuery);
        // console.log((await snap).val());
        setLoading(false);
        setOptionArray([]);
        setTitleOfQuestion(null);
        setId("");
        setNo("");
        // setAnswer({
        //   ans1: false,
        //   ans2: false,
        //   ans3: false,
        //   ans4: false,
        //   ans5: false,
        //   ans6: false,
        //   ans7: false,
        //   ans8: false,
        //   ans9: false,
        //   ans10: false,
        // });
        setState1(true);
        setState2(true);
        setState3(true);
        setState4(true);
        setState5(true);
        setState6(true);
        setState7(true);
        setState8(true);
        setState9(true);
        setState10(true);
        setThemesCondition(false);
        // alert("success!");
      }

      //
    } catch (err) {
      console.log(err.message);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <QuizeFrom className={`from ${Classes.quizFrom}`} onSubmit={onSubmitFun}>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Write video id*</label>
        <QuizeInput
          iconeClass="material-symbols-outlined"
          className="form-control"
          placeholder="which question you wanna get"
          name="videId"
          icone="smart_display"
          value={id}
          onChange={(e) => {
            setId(e.target.value.trim());
          }}
          required
        />
        <QuizeInput
          iconeClass="material-symbols-outlined"
          className="form-control"
          placeholder="which question you wanna get"
          type="number"
          name="videId"
          icone="note_alt"
          value={no}
          onKeyDown={onKeyDownFun}
          onKeyUp={debounce(onKeyUpFun, 200)}
          onChange={(e) => {
            setNo(e.target.value.trim());
          }}
          required
        />
      </div>
      {optionArray && titleOfQuestion ? (
        <SecPart
          title={titleOfQuestion}
          option={optionArray}
          state1={state1}
          state2={state2}
          state3={state3}
          state4={state4}
          state5={state5}
          state6={state6}
          state7={state7}
          state8={state8}
          state9={state9}
          state10={state10}
          onChange1={onChange1}
          onChange2={onChange2}
          onChange3={onChange3}
          onChange4={onChange4}
          onChange5={onChange5}
          onChange6={onChange6}
          onChange7={onChange7}
          onChange8={onChange8}
          onChange9={onChange9}
          onChange10={onChange10}
        />
      ) : (
        <code>fill video Id & question No first!</code>
      )}
      <div>
        <label>
          <QuizeInput
            type="checkbox"
            checked={themesCondition}
            required
            onChange={(e) => setThemesCondition(e.target.checked)}
          />{" "}
          <span>Themes & condition</span>
        </label>
      </div>
      <br />
      <QuizeBtn
        disabled={loading}
        text={
          loading && !error ? (
            <AnimationBtn style={{ colo: "white" }} text="Submitting..." />
          ) : (
            "Submit"
          )
        }
        type="submit"
        className="btn btn-primary"
      />
    </QuizeFrom>
  );
}
