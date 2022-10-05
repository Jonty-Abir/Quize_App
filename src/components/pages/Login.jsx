import Illustration from "../LoginIllustration";
// import Info from "../Info";
import LoginFrom from "../LoginFrom";
import "../styles/style.css";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginFrom/>
      </div>
    </>
  );
}
