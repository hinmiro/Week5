import "./App.css";
import Home from "./views/Home.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import Layout from "./views/Layout.jsx";
import Single from "./views/Single.jsx";

const App = () => {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/media/:id" element={<Single />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
