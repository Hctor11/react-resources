import "../Styles/Styles.sass";
import iso from "/ISO.svg";
import { Link } from "react-router-dom";
import Sections from "./Sections";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/" className="link">
        <img src={iso} alt="iso" className="iso" />
      </Link>

      <div className="right-side">
        <Sections />
        <Link to="/about" className="btn link">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
