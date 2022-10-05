import Classes from "./styles/Textinput.module.css";

export default function Textinput({icon, ...rest}){
    return(
        <div className={Classes.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    );
}