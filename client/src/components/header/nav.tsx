import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <ul className="nav__item">
      <li className="nav__item__link">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__item__link--active" : "nav-link-inActive"
          }
        >
          {" "}
          Home
        </NavLink>
      </li>

      <li className="nav__item__link">
        <NavLink
          to="/misdemeanour"
          className={({ isActive }) =>
            isActive ? "nav__item__link--active" : "nav-link-inActive"
          }
        >
          Misdemeanours
        </NavLink>
      </li>
      <li className="nav__item__link">
        <NavLink
          to="/confession"
          className={({ isActive }) =>
            isActive ? "nav__item__link--active" : "nav-link-inActive"
          }
        >
          {" "}
          Confess To Us
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
