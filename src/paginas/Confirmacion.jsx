import "./Confirmacion.css";
import { useLocation, useNavigate } from "react-router-dom";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import FooterPagina from "../componentes/FooterPagina/FooterPagina.jsx";
import { Icon } from "@iconify/react";

export default function Confirmacion() {
  const location = useLocation();
  const navigate = useNavigate();
  const datos = location.state || {};

  const editarReserva = () => {
    navigate("/datos");
  };

  const cancelarReserva = () => {
    navigate("/");
  };

  return (
    <div>
      <CabeceraPagina>
        <LogoPaginas />
      </CabeceraPagina>

      <PlantillaPagina>
        <div className="contenedor contenedor-confirmacion">
          <h2>¡RESERVA CONFIRMADA!</h2>
          <p className="titulo-detalles-reserva">Detalles de la reserva</p>

          <div className="seccion-central">
            <div className="seccion-datos">
              <div className="confirmacion-datos">
                <Icon
                  icon="material-symbols:person"
                  width="30"
                  height="30"
                  className="datos-icono"
                />
                <span>
                  {datos.nombre} {datos.apellidos}
                </span>
              </div>

              <div className="confirmacion-datos">
                <Icon
                  icon="ic:baseline-supervisor-account"
                  width="30"
                  height="30"
                  className="datos-icono"
                />
                <span>{datos.personas} personas</span>
              </div>
              <div className="confirmacion-datos">
                <Icon
                  icon="ic:twotone-calendar-month"
                  width="30"
                  height="30"
                  className="datos-icono"
                />
                <span>{datos.fechaFormateada}</span>
              </div>

              <div className="confirmacion-datos">
                <Icon
                  icon="ic:baseline-access-time"
                  width="30"
                  height="30"
                  className="datos-icono"
                />
                <span>Hora: {datos.horaSeleccionada}</span>
              </div>
            </div>

            <div className="seccion-alergias">
              <div className="titulo-alergias alergias">
                <p>Alergias o restricciones alimentarias</p>
                <p>{datos.alergiaRestriccion || "Ninguna"}</p>
              </div>

              <div className="titulo-alergias notas">
                <p>Notas</p>
                <p>
                  {datos.necesidadEspecial || datos.requerimientoEspecial
                    ? `${datos.requerimientoEspecial || ""} ${
                        datos.necesidadEspecial || ""
                      }`
                    : "Ninguna solicitud"}
                </p>
              </div>
            </div>
          </div>

          <div className="seccion-botones">
            <button onClick={editarReserva}>EDITAR</button>
            <button onClick={cancelarReserva}>CANCELAR</button>
          </div>
        </div>

        <FooterPagina />
      </PlantillaPagina>
    </div>
  );
}
