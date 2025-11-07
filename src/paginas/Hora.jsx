import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import LineaProgreso from "../componentes/LineaProgreso/LineaProgreso.jsx";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";
import FooterPagina from "../componentes/FooterPagina/FooterPagina.jsx";
import "./Hora.css";
import { Icon } from "@iconify/react";

export default function Hora() {
  const navigate = useNavigate();
  const location = useLocation();
  const personasSeleccionadas = location.state?.personas || 0;
  const fechaSeleccionada = location.state?.fecha || "";
  const fechaFormateada = location.state?.fechaFormateada || "";

  const [horaSeleccionada, setHoraSeleccionada] = useState("");

  const horas = [
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:30 PM",
    "7:00 PM",
    "8:30 PM",
    "9:00 PM",
    "10:00 PM",
  ];

  function seleccionarHoraYNavegar(hora) {
    setHoraSeleccionada(hora);
    navigate("/experiencia", {
      state: {
        personas: personasSeleccionadas,
        fecha: fechaSeleccionada,
        fechaFormateada: fechaFormateada,
        hora: hora,
      },
    });
  }

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
            {
              nombre: "Hora",
              icono: "mdi:clock-outline",
              valor: horaSeleccionada,
            },
            { nombre: "Experiencia", icono: "mdi:assignment", valor: "" },
            { nombre: "Datos", icono: "mdi:file-document-outline", valor: "" },
          ]}
        />
      </CabeceraPagina>
      <PlantillaPagina>
        <div className="contenedor contenedor-hora">
          <p className="hora-titulo">Seleccione una hora</p>
          <div className="seccion-horas">
            <div className="horas-grid">
              {horas.map((hora) => (
                <span
                  key={hora}
                  className={`hora ${
                    horaSeleccionada === hora ? "seleccionado" : ""
                  }`}
                  onClick={() => seleccionarHoraYNavegar(hora)}
                >
                  {hora}
                </span>
              ))}
            </div>
          </div>
          <div className="hora-aviso">
            <div className="contenedor-icono-aviso">
              <Icon
                icon="material-symbols:warning"
                width="45"
                height="45"
                className="icono-aviso"
              />
            </div>
            <p>
              Por favor considerar que para la hora establecida de la reserva,
              el 50% de los integrantes deberán estar presentes para poder
              disponer de la mesa. Además se considera un tiempo máximo de
              tolerancia de 15 minutos.
            </p>
          </div>
          <div
            className="hora-regresar"
            onClick={() =>
              navigate("/fecha", { state: { personas: personasSeleccionadas } })
            }
            style={{ cursor: "pointer" }}
          >
            <Icon
              icon="material-symbols:arrow-back-ios-rounded"
              width="30"
              height="30"
            />
            <span>Regresar</span>
          </div>
        </div>
        <FooterPagina />
      </PlantillaPagina>
    </div>
  );
}
