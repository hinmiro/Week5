import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1 className={"font-semibold"}>(●'◡'●)</h1>
        <nav>
          <Link to="/" className={"font-light"}>
            Home 🐸
          </Link>
          <Link className={"font-light"} to="/profile">
            Profile 🐲
          </Link>
          <Link className={"font-light"} to="/upload">
            Upload 🦄
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright 2024</footer>
    </>
  );
};

export default Layout;
