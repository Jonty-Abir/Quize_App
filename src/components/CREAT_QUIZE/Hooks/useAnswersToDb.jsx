import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useState } from "react";
import QuizeBtn from "../QuizeBtn";
import QuizeFrom from "../QuizeFrom";
import QuizeInput from "../QuizeInput";
import Classes from "./DbAnswer.module.css";
//
export default function DbAnswers() {
  console.log("db");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");
  const [no, setNo] = useState("");
  //
  const [option1, setOption1] = useState({ title: "" });
  const [option2, setOption2] = useState({ title: "" });
  const [option3, setOption3] = useState({ title: "" });
  const [option4, setOption4] = useState({ title: "" });
  const [option5, setOption5] = useState({ title: "" });
  const [option6, setOption6] = useState({ title: "" });
  const [option7, setOption7] = useState({ title: "" });
  const [option8, setOption8] = useState({ title: "" });
  const [option9, setOption9] = useState({ title: "" });
  const [option10, setOption10] = useState({ title: "" });

  // warth
  const [optionArray, setOptionArray] = useState(null);
  const [titleOfQuestion, setTitleOfQuestion] = useState(null);
  // onchange
  const [checkbox, setCheckBox] = useState("");
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
  // let titleOfQuestion;
  // let optionArray ;

  // onKeyUP funtion
  const onKeyUpFun = async () => {
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
              console.log(data);
              setOptionArray(optionArray1);
            }
          } else {
            alert("Failed!");
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
  // onChange funtion
  const onChangeFun = (e) => {
    setCheckBox(e.target.checked);
    console.log(optionArray);
  };

  return (
    <QuizeFrom className={`from ${Classes.quizFrom}`}>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Write video id*</label>
        <QuizeInput
          iconeClass="material-symbols-outlined"
          className="form-control"
          placeholder="which question you wanna get"
          name="videId"
          icone="smart_display"
          value={id}
          //   onKeyUp={debounce(onKeyUpFun, 2000)}
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
          //   value={state.videId}
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
          //   value={state.videId}
        />
      </div>
      <div className="input-group-prepend">
        <div className="input-group-prepend">
          {/* 1 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 2 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 3 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 4 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 5 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 6 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 7 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 8 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 9 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
          {/* 10 */}
          <label className={Classes.label}>
            <QuizeInput
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked={checkbox}
              onChange={onChangeFun}
            />
            <span className={Classes.span}>{"static"}</span>
          </label>
        </div>
      </div>
      <br />
      <QuizeBtn
        disabled={loading}
        text={loading && !error ? "Submting..." : "Submit"}
        type="submit"
        className="btn btn-primary"
      />
    </QuizeFrom>
  );
}
