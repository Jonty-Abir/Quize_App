import { Fragment } from "react";
import CheckBox from "./CheckBox";
import Classes from "./styles/Answers.module.css";
export default function Answers({ opstions = [], onHandle, input }) {
  return (
    <div className={Classes.answers}>
      {opstions.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <CheckBox
              key={index}
              className={Classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => onHandle(e, index)}
            />
          ) : (
            <CheckBox
              key={index}
              className={`${Classes.answer} ${
                option.correct
                  ? Classes.correct
                  : option.checked
                  ? Classes.wrong
                  : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
