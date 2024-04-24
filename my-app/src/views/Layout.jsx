import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1 className={"text-4xl text-fuchsia-600 p-3"}>༼ つ ◕_◕ ༽つ 🍭</h1>
        <nav
          className={
            "flex justify-evenly text-indigo-800 bg-emerald-200 rounded-lg font-bold"
          }
        >
          <Link to="/">Home 🐸</Link>
          <Link to="/profile">Profile 🐲</Link>
          <Link to="/upload">Upload 🦄</Link>
          <Link to="/login">Login🔒</Link>
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
