import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import React, { useEffect } from "react";
import Watch from "./pages/Watch";
import ifCurrentUser from "./components/useCurrentUser";
import { navigate } from "@reach/router";
import Welcome from "./pages/Welcome";

function App() {
  const isLoggedIn = ifCurrentUser();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className="lg:p-0 bg-cover">
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/register" element={<RegistrationForm />} />
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
