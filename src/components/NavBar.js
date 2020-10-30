import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          Raje API
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/list">
                Employee List
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/add">
                Add Employee
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
