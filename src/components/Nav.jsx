import { NavLink } from "react-router-dom";
import logo from "../assets/images/home.png";
import Account from "./Account";
import Classes from "./styles/Nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={Classes.nav}>
        <ul>
          <li>
            <NavLink to="/" className={Classes.brand}>
              <img src={logo} alt="Owner logo" />
              <h3>Home</h3>
            </NavLink>
          </li>
        </ul>
        <Account />
      </nav>
    </>
  );
}
