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

//
export default function DBQuizeFrom() {
  const [quizDetails, setQuizDetails] = useState({
    qTitle: "",
    op1: "",
    op2: "",
    op3: "",
    op4: "",
    op5: "",
    op6: "",
    op7: "",
    op8: "",
    op9: "",
    op10: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // onHandleChange
  let name;
  let value;
  const onHandleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setQuizDetails({ ...quizDetails, [name]: value });
  };
  //onSubmitFun
  const onSubmitFun = async (event) => {
    event.preventDefault();
    try {
      setError(false);
      setLoading(true);
      const db = getDatabase();
      // for length
      const dbRef = ref(db, "videos/");
      const quizeQuary = query(dbRef, orderByKey());
      const snapShot = await get(quizeQuary);
      const length = Object.keys(snapShot.val()).length;
      // for id
      const dbRef2 = ref(db, `videos/${"" + length}`);
      const snapShot2 = await get(query(dbRef2, orderByKey()));
      setLoading(false);
      const videoID = snapShot2.val().youtubeID;
      //
      if (snapShot2.exists() && snapShot.exists()) {
        setLoading(true);
        const quizDbIDRef = ref(db, `quiz/`);
        const quizSnapShot2 = await get(query(quizDbIDRef, orderByKey()));
        const idArray = Object.keys(quizSnapShot2.val());
        if (idArray.includes(videoID)) {
          const quizDbRef = ref(db, `quiz/${videoID}/questions/`);
          const quizSnapShot = await get(query(quizDbRef, orderByKey()));
          const length = Object.keys(quizSnapShot.val()).length || 0;
          const key = "" + length;
          // crate update obj
          const updatedObj2 = {
            [key]: {
              title: quizDetails.qTitle,
              options: [
                {
                  title: quizDetails.op1,
                },
                {
                  title: quizDetails.op2,
                },
                {
                  title: quizDetails.op3,
                },
                {
                  title: quizDetails.op4,
                },
                {
                  title: quizDetails.op5,
                },
                {
                  title: quizDetails.op6,
                },
                {
                  title: quizDetails.op7,
                },
                {
                  title: quizDetails.op8,
                },
                {
                  title: quizDetails.op9,
                },
                {
                  title: quizDetails.op10,
                },
              ],
            },
          };
          await update(quizDbRef, updatedObj2);
          setLoading(false);
          setQuizDetails({
            qTitle: "",
            op1: "",
            op2: "",
            op3: "",
            op4: "",
            op5: "",
            op6: "",
            op7: "",
            op8: "",
            op9: "",
            op10: "",
          });
          // alert("Success!");
        } else {
          const updatedObj = {
            [videoID]: {
              questions: [
                {
                  title: quizDetails.qTitle,
                  options: [
                    {
                      title: quizDetails.op1,
                    },
                    {
                      title: quizDetails.op2,
                    },
                    {
                      title: quizDetails.op3,
                    },
                    {
                      title: quizDetails.op4,
                    },
                    {
                      title: quizDetails.op5,
                    },
                    {
                      title: quizDetails.op6,
                    },
                    {
                      title: quizDetails.op7,
                    },
                    {
                      title: quizDetails.op8,
                    },
                    {
                      title: quizDetails.op9,
                    },
                    {
                      title: quizDetails.op10,
                    },
                  ],
                },
              ],
            },
          };
          const updateDbRef = ref(db, "quiz/");
          const updateDbQuery = query(updateDbRef, orderByKey());
          await update(updateDbQuery, updatedObj);
          setLoading(false);
          setQuizDetails({
            qTitle: "",
            op1: "",
            op2: "",
            op3: "",
            op4: "",
            op5: "",
            op6: "",
            op7: "",
            op8: "",
            op9: "",
            op10: "",
          });
          // alert("Success!");
        }

        setLoading(false);
      }
    } catch (err) {
      alert("Failed!");
      console.log(err);
      alert("Failed!");
      setError(true);
      setLoading(false);
      setQuizDetails({
        qTitle: "",
        op1: "",
        op2: "",
        op3: "",
        op4: "",
        op5: "",
        op6: "",
        op7: "",
        op8: "",
        op9: "",
        op10: "",
      });
    }
  };
  return (
    <QuizeFrom
      className="from"
      style={{
        border: "2px dotted black",
        padding: "5px",
        borderRadius: "3px",
      }}
      onSubmit={onSubmitFun}
    >
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">
          Write a Question for Quize*
        </label>
        <QuizeInput
          type="text"
          name="qTitle"
          icone="quiz"
          iconeClass="material-symbols-outlined"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Write A Question"
          value={quizDetails.qTitle}
          onChange={onHandleChange}
          required
        />
      </div>
      {/* start option */}
      <label>
        ENTER OPTION BELOW{" "}
        <span className="material-symbols-outlined">view_list</span>
      </label>

      <div className="form-group">
        <label> OPTION: 1</label>
        <QuizeInput
          type="text"
          name="op1"
          className="form-control"
          placeholder="Write Optiont"
          value={quizDetails.op1}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 2</label>
        <QuizeInput
          type="text"
          name="op2"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op2}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 3</label>
        <QuizeInput
          type="text"
          name="op3"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op3}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 4</label>
        <QuizeInput
          type="text"
          name="op4"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op4}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 5</label>
        <QuizeInput
          type="text"
          name="op5"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op5}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 6</label>
        <QuizeInput
          type="text"
          name="op6"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op6}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 7</label>
        <QuizeInput
          type="text"
          name="op7"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op7}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 8</label>
        <QuizeInput
          type="text"
          name="op8"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op8}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 9</label>
        <QuizeInput
          type="text"
          name="op9"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op9}
          onChange={onHandleChange}
          required
        />
      </div>
      <div className="form-group">
        <label> OPTION: 10</label>
        <QuizeInput
          type="text"
          name="op10"
          className="form-control"
          placeholder="Write Option"
          value={quizDetails.op10}
          onChange={onHandleChange}
          required
        />
      </div>
      <br />
      <QuizeBtn
        disabled={loading}
        text={loading && !error ? <AnimationBtn style={{colo:"white"}} text="Submitting..."/>  : "Submit"}
        type="submit"
        className="btn btn-primary"
      />
    </QuizeFrom>
  );
}
