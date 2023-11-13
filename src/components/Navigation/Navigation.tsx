import "../Styles/Styles.sass";
import iso from "/ISO.svg";
import { Link } from "react-router-dom";
import Sections from "./Sections";

const Navigation = () => {
  return (
    <div className="navigation fixed z-50 w-11/12 m-10 items-center px-4 shadow-lg backdrop-blur-sm">
      <Link to="/" className="link">
        <img src={iso} alt="iso" className="iso" />
      </Link>

      <div className="right-side gap-3">
        <Sections/>
        <Link to="/about" className="btn link">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
