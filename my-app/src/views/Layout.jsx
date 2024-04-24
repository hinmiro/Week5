import { Outlet } from "react-router-dom";
import SiteNavigation from "../components/SiteNavigation.jsx";

const Layout = () => {
  return (
    <>
      <header>
        <h1 className={"text-4xl text-fuchsia-600 p-3"}>༼ つ ◕_◕ ༽つ 🍭</h1>
        <SiteNavigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright 2024</footer>
    </>
  );
};

export default Layout;
