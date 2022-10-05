import Classes from "./styles/From.module.css";

export default function From({ children, className, ...rest }) {
  return (
    <form className={`${Classes.signup} ${Classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
}
