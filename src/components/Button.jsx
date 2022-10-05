import Classes from "./styles/Button.module.css";

export default function Button({className ,children,...res }) {
return <button className={`${Classes.button} ${Classes.className}`} {...res} >{children}</button>;
}
