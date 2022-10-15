import "./ANS_FROM/DbAnswer.module.css";
// import "./QuizeStyle.css";
export default function QuizeInput({ icone, iconeClass,text, ...rest }) {
  return (
    <>
      <input {...rest} />{ text}
      <span className={iconeClass}>{icone}</span>
    </>
  );
}
