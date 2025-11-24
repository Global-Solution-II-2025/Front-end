import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Cursos from "../pages/News";
import Sobre from "../pages/About";
import Login from "../pages/Login";
import Termos from "../pages/Terms";
import Privacidade from "../pages/Privacy";
import FAQ from "../pages/faq";
import Integrantes from "../pages/Members";
import Contact from "../pages/Contact";
import Chatbot from "../pages/NoraIA";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Routes>
      {/* Login sem layout */}
      <Route path="/login" element={<Login />} />

      {/* Termos e Privacidade sem layout App */}
      <Route path="/termos" element={<Termos />} />
      <Route path="/privacidade" element={<Privacidade />} />

      {/* Rotas com layout App*/}
      <Route
        path="/"
        element={isLoggedIn ? <App /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Home />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="integrantes" element={<Integrantes />} />
        <Route path="contato" element={<Contact />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      {/* Redirecionamento */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
