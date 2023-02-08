import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegistrationForm from "./pages/RegistrationForm";
import LoginForm from "./pages/LoginForm";
import React from "react";
import Watch from "./pages/Watch";

function App() {
  return (
    <div className="lg:p-0  bg-zinc-900 bg-cover">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register" element={<RegistrationForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
