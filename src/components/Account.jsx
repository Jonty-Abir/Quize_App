import { NavLink, useHistory } from "react-router-dom";
import dp from "../assets/images/profile.png";
import { useAuth } from "./contex/AuthContex";
import Classes from "./styles/Account.module.css";
import Classes2 from "./styles/Hover.module.css";

export default function Account() {
  const history = useHistory();
  const { currentUser, logOut } = useAuth();

  async function onHandle() {
    try {
      await logOut();
      history.push("/login");
    } catch (err) {
      alert("LogOut Failed!");
    }
  }
  return (
    <div className={Classes.account}>
      {currentUser ? (
        <>
          <span>
            <img src={dp} alt="Dp" />
          </span>
          <span style={{ fontWeight: "bolder" }}>
            {currentUser.displayName}
          </span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={onHandle}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <NavLink
            to="/signup"
            className={Classes2.hoverEf}
            activeClassName={Classes2.hoverEf}
            activeStyle={{color:"#7f0cecc9"}}
          >
            Signup
          </NavLink>
          <NavLink
            className={Classes2.hoverEf}
            to="/login"
            activeClassName={Classes2.hoverEf}
            activeStyle={{color:"#7f0cecc9"}}
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
}
