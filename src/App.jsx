import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import MainMenu from "./pages/MainMenu.jsx";
import Advice from "./pages/Advice.jsx";
import About from "./pages/About.jsx";
import RecoverAccount from "./pages/RecoverAccount.jsx";
import VerifyCode from "./pages/VerifyCode.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />           
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<MainMenu />} />
      <Route path="/advice" element={<Advice />} />
      <Route path="/about" element={<About />} />
      <Route path="/recover" element={<RecoverAccount />} />
      <Route path="/verify" element={<VerifyCode />} />
      <Route path="/create" element={<CreateAccount />} />
      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
