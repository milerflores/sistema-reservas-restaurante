import FondoMar from "./componentes/FondoMarAzul/FondoMar.jsx";
import Portada from "./paginas/portada.jsx";
import Personas from "./paginas/Personas.jsx";
import Fecha from "./paginas/Fecha.jsx";
import Hora from "./paginas/Hora.jsx";
import Experiencia from "./paginas/Experiencia.jsx";
import Datos from "./paginas/Datos.jsx";
import Confirmacion from "./paginas/Confirmacion.jsx";
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
          <Route path="/hora" element={<Hora />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
