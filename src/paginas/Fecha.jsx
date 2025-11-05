import "./Fecha.css";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import LineaProgreso from "../componentes/LineaProgreso/LineaProgreso.jsx";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";
import { useNavigate } from "react-router-dom";

export default function Fecha() {
  return (
    <div>
      <CabeceraPagina>
        <LogoPaginas />
        <LineaProgreso
          pasoActual={1}
          pasos={[
            { nombre: "Personas", icono: "mdi:account-outline", valor: "4" },
            { nombre: "Fecha", icono: "mdi:calendar-month-outline", valor: "" },
            { nombre: "Hora", icono: "mdi:clock-outline", valor: "" },
            {
              nombre: "Experiencia",
              icono: "mdi:assignment",
              valor: "",
            },
            { nombre: "Datos", icono: "mdi:file-document-outline", valor: "" },
          ]}
        />
      </CabeceraPagina>
      <PlantillaPagina>
        <div className="contenedor contenedor-fecha">
          <p>Texto de prueba en fecha</p>
        </div>
      </PlantillaPagina>
    </div>
  );
}
