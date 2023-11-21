import icon from '/icon1.svg';
import { Link } from 'react-router-dom';

const Sections = () => {
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn">
            Categories 
            <img src={icon} alt="" />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <Link to='/components'>UI Components</Link>
          </li>
          <li>
            <Link to='/tools'>3D tools</Link>
          </li>
          <li>
            <Link to='/animations'>Animations</Link>
          </li>
          <li>
            <Link to='/charts'>Charts</Link>
          </li>
          <li>
            <Link to='/icons'>Icons</Link>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Sections;
