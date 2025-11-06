import { useNavigate, useLocation } from "react-router-dom";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import LineaProgreso from "../componentes/LineaProgreso/LineaProgreso.jsx";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";
import FooterPagina from "../componentes/FooterPagina/FooterPagina.jsx";

export default function Hora() {
  const navigate = useNavigate();
  const location = useLocation();

  const personasSeleccionadas = location.state?.personas || 0;
  // const fechaSeleccionada = location.state?.fecha || "";
  const fechaFormateada = location.state?.fechaFormateada || "";

  return (
    <div>
      <CabeceraPagina>
        <LogoPaginas />
        <LineaProgreso
          pasoActual={2}
          pasos={[
            {
              nombre: "Personas",
              icono: "mdi:account-outline",
              valor: personasSeleccionadas,
            },
            {
              nombre: "Fecha",
              icono: "mdi:calendar-month-outline",
              valor: fechaFormateada,
            },
            { nombre: "Hora", icono: "mdi:clock-outline", valor: "" },
            { nombre: "Experiencia", icono: "mdi:assignment", valor: "" },
            { nombre: "Datos", icono: "mdi:file-document-outline", valor: "" },
          ]}
        />
      </CabeceraPagina>
      <PlantillaPagina>
        <FooterPagina />
      </PlantillaPagina>
    </div>
  );
}
