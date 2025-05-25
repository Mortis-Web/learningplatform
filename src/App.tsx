import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Courses from "./Pages/Courses.js";
import AuthForm from "./Pages/AuthForm.js";
import ScienceUnit from "./Pages/ScienceUnit.js";
// import SignIn from "./Pages/SignIn.js";
import UserProfile from "./Pages/UserProfile.js";
import Header from "./components/Header/Header.js";

function AppContent() {
  const location = useLocation();
  const showHeader = location.pathname !== "/login" && location.pathname !== "/signin";

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/unit" element={<ScienceUnit />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<AuthForm mode="login"/>} />
        <Route path="/signin" element={<AuthForm mode="signin"/>} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
