import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1 className={"font-semibold"}>(●'◡'●)</h1>
        <nav>
          <Link to="/" className={"font-light"}>
            Home 🐸
          </Link>
          <Link className={"font-light"} to="/profile">
            Profile
          </Link>
          <Link className={"font-light"} to="/upload">
            Upload
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright 2024</footer>
    </div>
  );
};

export default Layout;
