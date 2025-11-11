import { Routes, Route } from "react-router-dom";
import App from "../App";

// 🧩 Importa páginas
import Home from "../pages/Home";
import Trilhas from "../pages/Trilhas";
import Cursos from "../pages/Cursos";
import Inteligencia from "../pages/Inteligencia";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout principal (Header + Footer) */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="trilhas" element={<Trilhas />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="ia" element={<Inteligencia />} />
        <Route path="sobre" element={<Sobre />} />
      </Route>

      {/* Página fora do layout */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
