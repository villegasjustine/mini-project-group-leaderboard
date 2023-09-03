import { useContext } from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {

  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/">Welcome</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li><li>
          <NavLink to="/exercises">Exercises</NavLink>
        </li>
                  
      </ul>
    </nav>
  );
}
