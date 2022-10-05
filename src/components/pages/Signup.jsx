import Illustration from "../SignUpIllustration";
// import Info from "../Info";
import SignUpFrom from "../SignUpFrom";
//
export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignUpFrom />
      </div>
    </>
  );
}
