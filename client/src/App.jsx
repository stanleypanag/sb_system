import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/reusable/footer/Footer";
import {User, Admin} from "./loader/index";
import {HeaderGuest, HeaderRegular} from "./components/c_user";
import {useState, useEffect} from "react";
import LoginPage from "./components/c_user/auth/login_page/LoginPage";
import {
  Homepage,
  Resolution,
  Ordinance,
  RegisterPage,
} from "./components/c_user";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const isAuthenticated = localStorage.getItem("token") !== null;
      setIsLoggedIn(isAuthenticated);
    };
    checkAuthentication();
  }, []);

  return (
    <BrowserRouter>
      <>
        <div className="header">
          {/* Conditionally render different headers based on authentication status */}
          {isLoggedIn ? <HeaderRegular /> : <HeaderGuest />}
        </div>
        <Routes>
          {/* Render LoginPage routes only if the user is not logged in */}
          {!isLoggedIn && (
            <>
              <Route
                path="/login"
                element={<LoginPage setLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<User />} />
              <Route path="/resolution" element={<Resolution />} />
              <Route path="/ordinance" element={<Ordinance />} />
            </>
          )}
          {/* Render User component routes if the user is logged in */}
          {isLoggedIn && (
            <>
              <Route path="/" element={<User />} />
              <Route path="/resolution" element={<Resolution />} />
              <Route path="/ordinance" element={<Ordinance />} />
            </>
          )}
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
