import "../Styles/Styles.sass";
import iso from "/ISO.svg";
import { Link } from "react-router-dom";
import Sections from "./Sections";

const Navigation = () => {
  return (
    <div className="navigation fixed z-50 w-full md:w-11/12 md:m-10 items-center px-2 bg-white bg-opacity-20 backdrop-blur">
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
