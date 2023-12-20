import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <ul className="nav__item">
      <li className="nav__item__link">
        <NavLink to="/"> Home</NavLink>
      </li>

      <li className="nav__item__link">
        <NavLink to="/confessions"> Confessions</NavLink>
      </li>
      <li className="nav__item__link">
        <NavLink to="/misdemeanours"> Misdemeanours</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
