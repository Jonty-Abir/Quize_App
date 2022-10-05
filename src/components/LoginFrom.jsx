
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AnimationBtn from "./AnimationBtn";
import Button from "./Button";
import { useAuth } from "./contex/AuthContex";
import From from "./From";
import Textinput from "./Textinput";

export default function LoginFrom(){
  const [email,setEmail]=useState("");
  const [password,setPassword]= useState("");
  const [loading,setLoading]= useState("");
  const [error,setError]= useState("");
  const {login}=useAuth();
  const history= useHistory();

  async function onHandle(event){
    event.preventDefault();
    try{
      setLoading(true);
      setError('');
      await login(email,password);
      history.push('/');
    }catch(err){
      console.log(err.message)
      setError('Failed to login!');
      setLoading(false);
    }
  }

      return(
        <From style={{ height: "330px" }} onSubmit={onHandle} >
          <Textinput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            required
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Textinput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)}  required/>
          <Button disabled={loading} type="submit">
            <span>
            {loading ? <AnimationBtn text="Loging..."/>:"LOGIN NOW"}
            </span>
          </Button>
          
          {error && <p className="error">{error}</p>}
          <div className="info">
      Already have an account? <Link to="/signup">SignUp</Link> instead.
    </div>
        </From>
    );
}