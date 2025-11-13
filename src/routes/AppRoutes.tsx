import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Trilhas from "../pages/Trilhas";
import Cursos from "../pages/Noticias";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import Termos from "../pages/Termos";
import Privacidade from "../pages/Privacidade";
import FAQ from "../pages/faq";
import Integrantes from "../pages/integrantes";
import Contact from "../pages/Contact"; // 

export default function AppRoutes() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Routes>
      {/* Login fora do layout */}
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas */}
      <Route
        path="/"
        element={isLoggedIn ? <App /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Home />} />
        <Route path="trilhas" element={<Trilhas />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="termos" element={<Termos />} />
        <Route path="privacidade" element={<Privacidade />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="integrantes" element={<Integrantes />} />
        <Route path="contato" element={<Contact />} />
      </Route>

      {/* Redireciona tudo que não existe */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
