const Sections = () => {
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn">Categories</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>UI Components</a>
          </li>
          <li>
            <a>3D tools</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Sections;
