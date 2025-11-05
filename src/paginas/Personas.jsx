import "./Personas.css";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import LineaProgreso from "../componentes/LineaProgreso/LineaProgreso.jsx";
import { useNavigate } from "react-router-dom";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";

export default function Personas() {
  const navegarPaginas = useNavigate();
  function IrAFecha() {
    navegarPaginas("/fecha");
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
                <div className="numeros-personas numero-1">
                  <span>1</span>
                </div>
                <div className="numeros-personas numero-2">
                  <span>2</span>
                </div>
                <div className="numeros-personas numero-3">
                  <span>3</span>
                </div>
                <div className="numeros-personas numero-4">
                  <span>4</span>
                </div>
              </div>

              <button onClick={IrAFecha} className="boton-personas">
                SIGUIENTE
              </button>
            </div>
            <div className="telefono-contacto">
              <p>Para reservas de 9 personas a más</p>

              <div className="contactanos-directamente">
                <p>Contáctanos directamente</p>
                <div className="contactanos-telefono">
                  <span>999888888</span>
                  <span>icon</span>
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
      </PlantillaPagina>
    </div>
  );
}
