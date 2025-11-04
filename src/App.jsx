// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import MainMenu from "./pages/mainMenu";  
import Advice from "./pages/Advice";
import About from "./pages/About";
import CreateAccount from "./pages/CreateAccount";
import RecoverAccount from "./pages/RecoverAccount";
import VerifyCode from "./pages/VerifyCode";
import Pairs from "./pages/Pairs"; 
import Rhythm from "./pages/rhythm";
import Streak from "./pages/Streak";
import ExplainPairs from "./pages/ExplainPairs";
import ExplainRhythm from "./pages/ExplainRhythm";

export default function App() {
  return (
    <Routes>
    
      <Route path="/" element={<AppLayout><Home /></AppLayout>} />
      <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
      <Route path="/main" element={<AppLayout><MainMenu /></AppLayout>} />
      <Route path="/advice" element={<AppLayout><Advice /></AppLayout>} />
      <Route path="/about" element={<AppLayout><About /></AppLayout>} />
      <Route path="/create" element={<AppLayout><CreateAccount /></AppLayout>} />
      <Route path="/recover" element={<AppLayout><RecoverAccount /></AppLayout>} />
  <Route path="/verify" element={<AppLayout><VerifyCode /></AppLayout>} />
  <Route path="/explain-pairs" element={<AppLayout><ExplainPairs /></AppLayout>} />
  <Route path="/explain-rhythm" element={<AppLayout><ExplainRhythm /></AppLayout>} />

   
  <Route path="/pairs" element={<Pairs />} />
  <Route path="/rhythm" element={<Rhythm />} />

  
      <Route path="/streak" element={<AppLayout><Streak /></AppLayout>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
