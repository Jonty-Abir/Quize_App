import QuizeInput from "../QuizeInput";
import Classes from "./DbAnswer.module.css";

//
export default function SecPart({
  title,
  option,
  onChange1,
  onChange2,
  onChange3,
  onChange4,
  onChange5,
  onChange6,
  onChange7,
  onChange8,
  onChange9,
  onChange10,
  state1,
  state2,
  state3,
  state4,
  state5,
  state6,
  state7,
  state8,
  state9,
  state10,
}) {
  // console.log(option[0])

  return (
    <>
      <h1>
        <code>{title}</code>{" "}
      </h1>
      {/* 1 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans1"
          value={option[0]}
          checked={state1 || ""}
          // text={option[0]}
          onChange={onChange1}
        />
        <span className={Classes.span}>{option[0]}</span>
      </label>
      {/* 2 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans2"
          value={["valu2", option[1]]}
          checked={state2 || ""}
          onChange={onChange2}
        />
        <span className={Classes.span}>{option[1]}</span>
      </label>
      {/* 3 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans3"
          value={["valu3", option[2]]}
          checked={state3 || ""}
          onChange={onChange3}
        />
        <span className={Classes.span}>{option[2]}</span>
      </label>
      {/* 4 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans4"
          value={["valu4", option[3]]}
          checked={state4 || ""}
          onChange={onChange4}
        />
        <span className={Classes.span}>{option[3]}</span>
      </label>
      {/* 5 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans5"
          value={["valu5", option[4]]}
          checked={state5 || ""}
          onChange={onChange5}
        />
        <span className={Classes.span}>{option[4]}</span>
      </label>
      {/* 6 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans6"
          value={["valu6", option[5]]}
          checked={state6 || ""}
          onChange={onChange6}
        />
        <span className={Classes.span}>{option[5]}</span>
      </label>
      {/* 7 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans7"
          value={["valu7", option[6]]}
          checked={state7 || ""}
          onChange={onChange7}
        />
        <span className={Classes.span}>{option[6]}</span>
      </label>
      {/* 8 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans8"
          value={["valu8", option[7]]}
          checked={state8 || ""}
          onChange={onChange8}
        />
        <span className={Classes.span}>{option[7]}</span>
      </label>
      {/* 9 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans9"
          value={["valu9", option[8]]}
          checked={state9 || ""}
          onChange={onChange9}
        />
        <span className={Classes.span}>{option[8]}</span>
      </label>
      {/* 10 */}
      <label className={Classes.label}>
        <QuizeInput
          type="checkbox"
          aria-label="Checkbox for following text input"
          name="ans10"
          value={["valu10", option[9]]}
          checked={state10 || ""}
          onChange={onChange10}
        />
        <span className={Classes.span}>{option[9]}</span>
      </label>
    </>
  );
}
