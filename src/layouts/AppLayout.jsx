// src/layouts/AppLayout.jsx
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

export default function AppLayout({ children }) {
  return (
    <div className="page">
      <Header />
      <main className="app-content">{children}</main>
      <Toaster position="top-center" />
    </div>
  );
}
