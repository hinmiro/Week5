import "./App.css";
import Home from "./views/Home.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import Layout from "./views/Layout.jsx";
import Single from "./views/Single.jsx";
import Login from "./views/Login.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import HandleAutoLogin from "./components/HandleAutoLogin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Modify from "./views/Modify.jsx";

const App = () => {
  const basename = import.meta.env.BASE_URL;

  return (
    <>
      <Router basename={basename}>
        <UserProvider>
          <HandleAutoLogin />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
              <Route path="/media/:id" element={<Single />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/modify/:id"
                element={
                  <ProtectedRoute>
                    <Modify />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};
export default App;
