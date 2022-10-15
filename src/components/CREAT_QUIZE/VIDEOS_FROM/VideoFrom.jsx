import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
  update
} from "firebase/database";
import AnimationBtn from "../../AnimationBtn";

import { useState } from "react";
import QuizeBtn from "../QuizeBtn";
import QuizeFrom from "../QuizeFrom";
import QuizeInput from "../QuizeInput";
// css import

//
export default function VideoFrom() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let [state, setState] = useState({
    videId: "",
    videoTittle: "",
    noq: "",
  });
  // onChange Function
  let name;
  let value;
  const onHandle = (e) => {
    name = e.target.name;
    value = e.target.value;
    setState({ ...state, [name]: value });
  };
  // onSubmit Funtion
  const onSubmitFun = async (event) => {
    event.preventDefault();

    try {
      setError(false);
      setLoading(true);
      const db = getDatabase();
      const dbRef = ref(db, "videos/");
      const myQuery = query(dbRef, orderByKey());
      const snapshot = await get(myQuery);
      setLoading(false);
      const length = Object.keys(snapshot.val()).length;
      const plusKey = length + 1;
      const updatedObj = {
        [plusKey]: {
          youtubeID: state.videId,
          title: state.videoTittle,
          noq: state.noq,
        },
      };
      if (length > 0) {
        setLoading(true);
        await update(myQuery, updatedObj);
        setLoading(false);
        // alert("Success!");
      }
      setState({
        videId: "",
        videoTittle: "",
        noq: "",
      });
    } catch (err) {
      alert("Failed!");
      console.log(err);
      setError(true);
      setLoading(false);
      setState({
        videId: "",
        videoTittle: "",
        noq: "",
      });
    }
  };
  return (
    <QuizeFrom
      className="quizeFrom"
      style={{
        border: "2px dotted black",
        padding: "5px",
        borderRadius: "3px",
      }}
      onSubmit={onSubmitFun}
    >
      <div className="first">
        <QuizeInput
          iconeClass="material-symbols-outlined"
          className="form-control"
          placeholder="Enter video ID"
          name="videId"
          icone="smart_display"
          value={state.videId.trim()}
          onChange={onHandle}
          required
          //   value={state.videId}
        />
        <QuizeInput
          iconeClass="material-symbols-outlined"
          className="form-control"
          placeholder="Enter video title "
          name="videoTittle"
          icone="list_alt"
          value={state.videoTittle}
          onChange={onHandle}
          required
        />
        <QuizeInput
          iconeClass="material-symbols-outlined"
          className="form-control"
          placeholder="number of question"
          name="noq"
          type="number"
          icone="list_alt"
          value={state.noq}
          onChange={onHandle}
          required
        />
      </div>{" "}
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
