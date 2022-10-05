import { Link } from "react-router-dom";
import Classes from "./styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={`${Classes.footer}`}>
      <footer>
        {/* FaceBook */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#3b5998" }}
          href="https://www.facebook.com/abir.santra.330/"
          role="button"
          target="blank"
        >
          <i className="fab fa-facebook-f" style={{ color: "white" }}></i>
        </a>
        {/* Twitter */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#2a90ea" }}
          href="https://twitter.com/AbirSantra9"
          target="blank"
          role="button"
        >
          <i className="fab fa-twitter" style={{ color: "white" }}></i>
        </a>
        {/* Google */}
        <Link to="/#"
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#ffff" }}
          role="button"
        >
          <i className="fab fa-google" style={{ color: "black" }}></i>
        </Link>
        {/* Instagram */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#ee0feb" }}
          href="https://www.instagram.com/abir.santra.330/"
          target="blank"
          role="button"
        >
          <i className="fab fa-instagram" style={{ color: "white" }}></i>
        </a>
        {/* LinkedIn */}
        <a
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: "#375ef6" }}
          href="https://www.linkedin.com/in/abir-santra-jonty/"
          role="button"
          target="blank"
        >
          <i className="fab fa-linkedin-in" style={{ color: "white" }}></i>
        </a>
        {/* GitHub */}
        <a
          className="btn text-white btn-floating m-1"
          href="https://github.com/Jonty-Abir"
          target="blank"
          role="button"
          style={{ backgroundColor: "#ffff" }}
        >
          <i className="fab fa-github" style={{ color: "black" }}></i>
        </a>
        <div className="text-center p-3" style={{ color: "#fff" }}>
          © {new Date().getFullYear()}
          <Link to="/#" className="text-white" style={{ fontWeight: "bolder" }}>
            {" "}
            @abir santra
          </Link>
        </div>
      </footer>
    </div>
  );
}
