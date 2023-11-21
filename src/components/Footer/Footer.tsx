import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center text-sm font-medium text-gray-500 p-10">
      {"made with <3 by"}{" "}
      <Link to="https://github.com/Hctor11" target="_blank" className="text-slate-900 underline">
        Hector Rivera
      </Link>
    </div>
  );
};

export default Footer;
