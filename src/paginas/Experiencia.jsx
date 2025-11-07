import "./Experiencia.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import LineaProgreso from "../componentes/LineaProgreso/LineaProgreso.jsx";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";
import FooterPagina from "../componentes/FooterPagina/FooterPagina.jsx";
import { Icon } from "@iconify/react";

export default function Experiencia() {
  const navigate = useNavigate();
  const location = useLocation();
  const personasSeleccionadas = location.state?.personas || 0;
  const fechaSeleccionada = location.state?.fecha || "";
  const fechaFormateada = location.state?.fechaFormateada || "";
  const horaSeleccionada = location.state?.hora || "";

  const [experienciaSeleccionada, setExperienciaSeleccionada] =
    useState("carta");
  const [lugarReserva, setLugarReserva] = useState("");
  const [requerimientoEspecial, setRequerimientoEspecial] = useState("");
  const [necesidadEspecial, setNecesidadEspecial] = useState("");
  const [alergiaRestriccion, setAlergiaRestriccion] = useState("");

  const seleccionarExperiencia = (tipo) => {
    setExperienciaSeleccionada(tipo);
  };

  const irAlUltimoPaso = () => {
    const experienciaTexto =
      experienciaSeleccionada === "carta" ? "A la carta" : "Menú\ndegustación";

    navigate("/datos", {
      state: {
        personas: personasSeleccionadas,
        fecha: fechaSeleccionada,
        fechaFormateada: fechaFormateada,
        hora: horaSeleccionada,
        experiencia: experienciaSeleccionada,
        experienciaTexto: experienciaTexto,
        lugarReserva: lugarReserva,
        requerimientoEspecial: requerimientoEspecial,
        necesidadEspecial: necesidadEspecial,
        alergiaRestriccion: alergiaRestriccion,
      },
    });
  };

  const paginaRegresar = () => {
    navigate("/hora", {
      state: {
        personas: personasSeleccionadas,
        fecha: fechaSeleccionada,
        fechaFormateada: fechaFormateada,
      },
    });
  };

  return (
    <div>
      <CabeceraPagina>
        <LogoPaginas />
        <LineaProgreso
          pasoActual={3}
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
        <div className="contenedor-experiencia">
          <div className="contenedor contenedor-panel-experiencia">
            <div className="cuadro-exp-superior">
              <h2 className="exp-camp-titulo">Experiencia</h2>
            </div>

            <div
              className="carta"
              onClick={() => seleccionarExperiencia("carta")}
            >
              <button
                className={`circulo-carta ${
                  experienciaSeleccionada === "carta" ? "seleccionado" : ""
                }`}
              ></button>
              <button className="btn-carta">A la carta</button>
            </div>

            <div
              className="menu-degustacion"
              onClick={() => seleccionarExperiencia("menu")}
            >
              <button
                className={`circulo-menu ${
                  experienciaSeleccionada === "menu" ? "seleccionado" : ""
                }`}
              ></button>
              <button className="btn-menu">
                Menú degustación
                <br />
                LA MAREA PÚRPURA
              </button>
            </div>

            <div className="reserva-su-mesa">
              <h2 className="donde-reserva">¿Donde quiere reservar su mesa?</h2>
              <select
                className="select-aire-local"
                value={lugarReserva}
                onChange={(e) => setLugarReserva(e.target.value)}
              >
                <option value="">Seleccione su preferencia</option>
                <option value="Aire libre">Aire libre</option>
                <option value="Dentro del local">Dentro del local</option>
              </select>
            </div>

            <div className="regresar" onClick={paginaRegresar}>
              <div className="experiencia-regresar">
                <Icon
                  icon="material-symbols:arrow-back-ios-rounded"
                  width="30"
                  height="30"
                />
              </div>
              <p>Regresar</p>
            </div>
          </div>

          <div className="contenedor contenedor-panel-campos">
            <div className="cuadro-campo-superior">
              <h2 className="campo-no-oblig-titulo">Campos no obligatorios</h2>
            </div>

            <div className="pregunta1">
              <p>¿Tienes algún requerimiento en especial?</p>
              <select
                className="selects-p1"
                value={requerimientoEspecial}
                onChange={(e) => setRequerimientoEspecial(e.target.value)}
              >
                <option value="">Seleccione una opción</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>

            <div className="pregunta2">
              <p>¿Alguna necesidad que debemos tomar en cuenta?</p>
              <input
                className="input-p2"
                type="text"
                placeholder="Tienes algún requerimiento en especial?"
                value={necesidadEspecial}
                onChange={(e) => setNecesidadEspecial(e.target.value)}
              />
            </div>

            <div className="pregunta3">
              <p className="pregunta3-texto">
                ¿Hay alguna alergia, intolerancia o restricción que debamos
                tomar en cuenta?
              </p>
              <input
                className="input-p3"
                type="text"
                placeholder="Especifique su caso"
                value={alergiaRestriccion}
                onChange={(e) => setAlergiaRestriccion(e.target.value)}
              />
            </div>
            <button className="btn-ultimo-paso" onClick={irAlUltimoPaso}>
              IR AL ÚLTIMO PASO
            </button>
          </div>
        </div>
      </PlantillaPagina>
    </div>
  );
}
