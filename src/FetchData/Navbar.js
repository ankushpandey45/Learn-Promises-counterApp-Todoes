import React from "react";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <nav  className="Navbar">
          <ul>
            <li>
              <Link to="/">DataTable </Link>
            </li>
            <li>
              <Link to="/DogsData"> Dogs Data</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
