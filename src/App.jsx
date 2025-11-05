import FondoMar from "./componentes/FondoMarAzul/FondoMar.jsx";
import Portada from "./paginas/portada.jsx";
import Personas from "./paginas/personas.jsx";
import Fecha from "./paginas/Fecha.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <FondoMar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/fecha" element={<Fecha />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
