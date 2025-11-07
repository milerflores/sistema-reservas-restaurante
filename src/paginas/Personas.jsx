import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./Personas.css";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import LineaProgreso from "../componentes/LineaProgreso/LineaProgreso.jsx";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";
import FooterPagina from "../componentes/FooterPagina/FooterPagina.jsx";

export default function Personas() {
  const navegarPaginas = useNavigate();
  const [personasSeleccionadas, setPersonasSeleccionadas] = useState(null);
  const [mostrarError, setMostrarError] = useState(false);

  const seleccionarPersonas = (numero) => {
    setPersonasSeleccionadas(numero);
    setMostrarError(false);
  };

  const incrementarPersonas = () => {
    if (personasSeleccionadas !== null && personasSeleccionadas < 8) {
      setPersonasSeleccionadas(personasSeleccionadas + 1);
    } else if (personasSeleccionadas === null) {
      setPersonasSeleccionadas(5);
    }
    setMostrarError(false);
  };

  const disminuirPersonas = () => {
    if (personasSeleccionadas !== null && personasSeleccionadas > 1) {
      setPersonasSeleccionadas(personasSeleccionadas - 1);
    }
    setMostrarError(false);
  };

  function IrAFecha() {
    if (personasSeleccionadas !== null) {
      navegarPaginas("/fecha", { state: { personas: personasSeleccionadas } });
    } else {
      setMostrarError(true);
    }
  }

  return (
    <div>
      <CabeceraPagina>
        <LogoPaginas />
        <LineaProgreso
          pasoActual={0}
          pasos={[
            { nombre: "Personas", icono: "mdi:account-outline", valor: "" },
            { nombre: "Fecha", icono: "mdi:calendar-month-outline", valor: "" },
            { nombre: "Hora", icono: "mdi:clock-outline", valor: "" },
            { nombre: "Experiencia", icono: "mdi:assignment", valor: "" },
            { nombre: "Datos", icono: "mdi:file-document-outline", valor: "" },
          ]}
        />
      </CabeceraPagina>
      <PlantillaPagina>
        <div className="contenedor contenedor-personas">
          <p className="titulo-personas">Escoja la cantidad de comensales</p>
          <div className="personas-telefono">
            <div className="escoger-personas">
              <div className="escoger-personas-1">
                <div
                  className={`numeros-personas numero-1 ${
                    personasSeleccionadas === 1 ? "seleccionado" : ""
                  }`}
                  onClick={() => seleccionarPersonas(1)}
                >
                  <span>1</span>
                </div>
                <div
                  className={`numeros-personas numero-2 ${
                    personasSeleccionadas === 2 ? "seleccionado" : ""
                  }`}
                  onClick={() => seleccionarPersonas(2)}
                >
                  <span>2</span>
                </div>
                <div
                  className={`numeros-personas numero-3 ${
                    personasSeleccionadas === 3 ? "seleccionado" : ""
                  }`}
                  onClick={() => seleccionarPersonas(3)}
                >
                  <span>3</span>
                </div>
                <div
                  className={`numeros-personas numero-4 ${
                    personasSeleccionadas === 4 ? "seleccionado" : ""
                  }`}
                  onClick={() => seleccionarPersonas(4)}
                >
                  <span>4</span>
                </div>
              </div>
              <div className="escoger-personas-2">
                <div
                  className={`numeros-personas numero-1 ${
                    personasSeleccionadas !== null && personasSeleccionadas <= 1
                      ? "boton-disabled"
                      : ""
                  }`}
                  onClick={disminuirPersonas}
                >
                  <span>-</span>
                </div>
                <div
                  className={`numeros-personas numero-2 ${
                    personasSeleccionadas !== null && personasSeleccionadas >= 5
                      ? "seleccionado"
                      : ""
                  }`}
                  onClick={() => seleccionarPersonas(5)}
                >
                  <span>
                    {personasSeleccionadas !== null &&
                    personasSeleccionadas >= 5
                      ? personasSeleccionadas
                      : 5}
                  </span>
                </div>
                <div
                  className={`numeros-personas numero-4 ${
                    personasSeleccionadas !== null && personasSeleccionadas >= 8
                      ? "boton-disabled"
                      : ""
                  }`}
                  onClick={incrementarPersonas}
                >
                  <span>+</span>
                </div>
              </div>
              <div onClick={IrAFecha} className="seccion-siguiente">
                <div className="texto-personas-siguiente">SIGUIENTE</div>

                <div className="flecha-siguiente">
                  <Icon
                    icon="material-symbols:arrow-right-alt-rounded"
                    width="40"
                    height="40"
                  />
                </div>
              </div>

              {mostrarError && (
                <p className="mensaje-error-personas">
                  Por favor selecciona la cantidad de comensales
                </p>
              )}
            </div>
            <div className="linea-divisoria" />
            <div className="telefono-contacto">
              <p className="mas-personas">
                Para reservas de 9 <br />
                personas a más
              </p>

              <div className="contactanos-directamente">
                <p>Contáctanos directamente</p>
                <div className="contactanos-telefono">
                  <Icon
                    icon="mdi:phone"
                    width="20"
                    height="20"
                    color="#B38CE3"
                  />
                  <span>999888888</span>
                </div>
                <div className="contactanos-email">
                  <Icon
                    icon="mdi:email"
                    width="20"
                    height="20"
                    color="#B38CE3"
                  />
                  <span>contacto@mareapurpura.com</span>
                </div>
              </div>
              <div className="horario-contactanos">
                <p>Horario de atención</p>
                <p>Lunes a sábado: 12pm - 11pm</p>
                <p>Domingos: 12pm - 6pm</p>
              </div>
              <div className="horario-atencion"></div>
            </div>
          </div>
          <div className="informacion-disponibilidad">
            <p>
              Si no hay disponibilidad, puedes visitarnos sin reserva. Atendemos
              en orden de llegada
            </p>
          </div>
        </div>
        <FooterPagina />
      </PlantillaPagina>
    </div>
  );
}
