import { Link } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="header">
      <div className="logo">React Books</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Books</Link>
          </li>
          <li>
            <Link to="/newbook">NewBook</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
