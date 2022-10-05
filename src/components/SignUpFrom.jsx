import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AnimationBtn from "./AnimationBtn";
import Button from "./Button";
import CheckBox from "./CheckBox";
import { useAuth } from "./contex/AuthContex";
import From from "./From";
import Textinput from "./Textinput";

export default function SignUpFrom() {
  const history = useHistory();
  const { signUp } = useAuth("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError(`Password don't match!`);
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password, userName);
      history.push("/");
    } catch (err) {
      setError("Failed to signUp an account.");
      console.log(err.message);
      loading(false);
    }
  }

  return (
    <From style={{ height: "500px" }} onSubmit={handleSubmit}>
      <Textinput
        type="text"
        placeholder="Enter name"
        required
        icon="person"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <Textinput
        type="email"
        placeholder="example@gailm.com"
        required
        icon="alternate_email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Textinput
        type="password"
        placeholder="Enter password"
        icon="lock_clock"
        value={password}
        minLength="8"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <Textinput
        type="password"
        placeholder="Confirm password"
        icon="lock"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        required
      />
      <CheckBox
        text="I agree to the Terms & Conditions"
        value={agree}
        onChange={(e) => {
          setAgree(e.target.checked);
        }}
        required
      />
      <Button disabled={loading} type="submit">
        <span>
          {loading ? <AnimationBtn text="Submitting..." /> : "Submit Now"}
        </span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </From>
  );
}
