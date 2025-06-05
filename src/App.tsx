import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Courses from './Pages/Courses.js';
import AuthForm from './Pages/AuthForm.js';
import ScienceUnit from './Pages/ScienceUnit.js';
// import SignIn from "./Pages/SignIn.js";
import UserProfile from './Pages/UserProfile.js';
import Header from './components/Header/Header.js';
import { ObjProvider } from './Hooks/ObjContext.js';
import { InputProvider } from './Hooks/InputContext.js';
import { SelectProvider } from './Hooks/SelectContext.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const location = useLocation();
  const showHeader =
    location.pathname !== '/' && location.pathname !== '/signin';

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<AuthForm mode="login" />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/unit" element={<ScienceUnit />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signin" element={<AuthForm mode="signin" />} />
      </Routes>
            <ToastContainer />

    </>
  );
}

export default function AppContext() {
  return (
      <InputProvider>
    <SelectProvider>
        <ObjProvider>
          <Router>
            <App />
          </Router>
        </ObjProvider>
    </SelectProvider>
      </InputProvider>
  );
}
