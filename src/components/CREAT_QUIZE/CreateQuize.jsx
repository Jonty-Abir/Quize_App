import DbAnswers from "./ANS_FROM/DbAnswers";
import "./QuizeStyle.css";
import DBQuizeFrom from "./Quiz_From/DBQuizeFrom";
import VideoFrom from "./VIDEOS_FROM/VideoFrom";
//
export default function CreateQuize() {
  return (
    <div className="quizeDiv">
      <code>
        If you want to add some quize fill froms and submit step by step.
      </code>
      <h2 style={{ color: "red" }}>Fill 1st*</h2>
      <VideoFrom />
      <br />
      <h2 style={{ color: "red" }}>Fill 2nd*</h2>
      <DBQuizeFrom />
      <br />
      <h2 style={{ color: "red" }}>Fill 3rd*</h2>
      <DbAnswers/>
    </div>
  );
}
