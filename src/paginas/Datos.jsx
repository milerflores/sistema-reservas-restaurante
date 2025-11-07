import "./Datos.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import LineaProgreso from "../componentes/LineaProgreso/LineaProgreso.jsx";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";
import FooterPagina from "../componentes/FooterPagina/FooterPagina.jsx";
import { Icon } from "@iconify/react";

export default function Datos() {
  const navigate = useNavigate();
  const location = useLocation();

  // ---------------- DATOS PREVIOS ----------------
  const personasSeleccionadas = location.state?.personas || 0;
  const fechaFormateada = location.state?.fechaFormateada || "";
  const horaSeleccionada =
    location.state?.horaSeleccionada || location.state?.hora || "";
  const experienciaTexto = location.state?.experienciaTexto || "";
  const lugarReserva = location.state?.lugarReserva || "";
  const requerimientoEspecial = location.state?.requerimientoEspecial || "";
  const necesidadEspecial = location.state?.necesidadEspecial || "";
  const alergiaRestriccion = location.state?.alergiaRestriccion || "";

  // ---------------- FORMULARIO ----------------
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [documento, setDocumento] = useState("");

  // ---------------- SWITCHES ----------------
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  // ---------------- ERRORES ----------------
  const [errorSwitch1, setErrorSwitch1] = useState(false);
  const [errorSwitch3, setErrorSwitch3] = useState(false);
  const [mostrarRequerido, setMostrarRequerido] = useState(false);
  const [errorCampos, setErrorCampos] = useState({
    nombre: false,
    telefono: false,
    documento: false,
  });

  // ---------------- FUNCIONES ----------------
  const finalizarReserva = () => {
    let hayError = false;
    setErrorSwitch1(false);
    setErrorSwitch3(false);
    setMostrarRequerido(false);
    setErrorCampos({ nombre: false, telefono: false, documento: false });

    // Validar switches
    if (!switch1) {
      setErrorSwitch1(true);
      hayError = true;
    }
    if (!switch3) {
      setErrorSwitch3(true);
      hayError = true;
    }

    // Validar campos obligatorios
    const nuevosErrores = { nombre: false, telefono: false, documento: false };
    if (!nombre.trim()) {
      nuevosErrores.nombre = true;
      hayError = true;
    }
    if (!telefono.trim()) {
      nuevosErrores.telefono = true;
      hayError = true;
    }
    if (!documento.trim()) {
      nuevosErrores.documento = true;
      hayError = true;
    }
    setErrorCampos(nuevosErrores);

    if (hayError) {
      setMostrarRequerido(true);
      return;
    }

    const switchesActivos = [];
    if (switch1) switchesActivos.push("Términos aceptados");
    if (switch3) switchesActivos.push("Mayor de 14 años");

    const datosReserva = {
      personas: personasSeleccionadas,
      fechaFormateada,
      horaSeleccionada,
      experienciaTexto,
      lugarReserva,
      requerimientoEspecial,
      necesidadEspecial,
      alergiaRestriccion,
      nombre,
      apellidos,
      email,
      telefono,
      documento,
      switches: switchesActivos,
    };

    navigate("/confirmacion", { state: datosReserva });
  };

  const paginaRegresar = () => {
    navigate("/experiencia", {
      state: {
        personas: personasSeleccionadas,
        fechaFormateada,
        hora: horaSeleccionada,
        experienciaTexto,
        lugarReserva,
        requerimientoEspecial,
        necesidadEspecial,
        alergiaRestriccion,
      },
    });
  };

  // ---------------- RENDER ----------------
  return (
    <div>
      <CabeceraPagina>
        <LogoPaginas />
        <LineaProgreso
          pasoActual={4}
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
              valor: experienciaTexto,
            },
            { nombre: "Datos", icono: "mdi:file-document-outline", valor: "" },
          ]}
        />
      </CabeceraPagina>

      <PlantillaPagina>
        <div className="contenedor-datos">
          {/* DATOS PERSONALES */}
          <div className="contenedor contenedor-datos-personales">
            <p className="titulo-datos-personales">Datos personales</p>
            <p className="completa-datos">Completa tus datos usando</p>

            <div className="botones-sociales">
              <button className="facebook">Facebook</button>
              <span>ó</span>
              <button className="google">Google</button>
            </div>

            <p className="reservar-para">Reserva para:</p>

            <form>
              <div className="fila">
                <div className="columna">
                  <label htmlFor="nombre">Nombres:</label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Escriba su nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className={errorCampos.nombre ? "input-error" : ""}
                  />
                </div>
                <div className="columna">
                  <label htmlFor="apellidos">Apellidos:</label>
                  <input
                    id="apellidos"
                    type="text"
                    placeholder="Escriba sus apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                  />
                </div>
              </div>

              <div className="fila">
                <div className="columna">
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Escriba su correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="columna">
                  <label htmlFor="telefono">Número telefónico:</label>
                  <input
                    id="telefono"
                    type="tel"
                    placeholder="Escriba su teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className={errorCampos.telefono ? "input-error" : ""}
                  />
                </div>
              </div>

              <div className="unalinea">
                <label htmlFor="documento">Documento de identidad:</label>
                <input
                  id="documento"
                  type="text"
                  placeholder="Escriba su DNI o CE o pasaporte"
                  value={documento}
                  onChange={(e) => setDocumento(e.target.value)}
                  className={errorCampos.documento ? "input-error" : ""}
                />
              </div>
            </form>

            <div className="datos-regresar" onClick={paginaRegresar}>
              <div className="regresar-icono">
                <Icon
                  icon="material-symbols:arrow-back-ios-rounded"
                  width="30"
                  height="30"
                />
              </div>
              <p>Regresar</p>
            </div>
          </div>

          {/* POLÍTICAS */}
          <div className="contenedor contenedor-politicas">
            <p className="titulo-politicas">Políticas del restaurante</p>
            <p className="politicas-cancelacion">Políticas de cancelación</p>
            <p>
              En nuestro restaurante, valoramos su tiempo y el nuestro. Por
              ello, las reservas pueden modificarse o cancelarse sin costo hasta
              24 horas antes de la hora programada. Las cancelaciones realizadas
              con menos de 24 horas de anticipación o la inasistencia sin aviso
              podrán estar sujetas a un cargo equivalente al costo promedio por
              persona.
            </p>

            <div className="terminos-condiciones">
              <div
                className={`seleccionar-terminos ${
                  errorSwitch1 ? "switch-error" : ""
                }`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={switch1}
                    onChange={() => {
                      setSwitch1(!switch1);
                      setErrorSwitch1(false);
                    }}
                  />
                  <span className="switch"></span>
                  <span className="texto">
                    Acepto los términos y condiciones y políticas de privacidad
                    del restaurante La Marea Púrpura.
                  </span>
                </label>
              </div>

              <div className="seleccionar-terminos">
                <label>
                  <input
                    type="checkbox"
                    checked={switch2}
                    onChange={() => setSwitch2(!switch2)}
                  />
                  <span className="switch"></span>
                  <span className="texto">
                    Consiento la recepción de comunicaciones del restaurante por
                    e-mail y/o SMS con fines comerciales.
                  </span>
                </label>
              </div>

              <div
                className={`seleccionar-terminos ${
                  errorSwitch3 ? "switch-error" : ""
                }`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={switch3}
                    onChange={() => {
                      setSwitch3(!switch3);
                      setErrorSwitch3(false);
                    }}
                  />
                  <span className="switch"></span>
                  <span className="texto">
                    Declaro que soy mayor de 14 años.
                  </span>
                </label>
              </div>
            </div>

            <button className="boton-finalizar" onClick={finalizarReserva}>
              FINALIZAR RESERVA
            </button>

            {mostrarRequerido && <p className="mensaje-error"></p>}
          </div>
        </div>
        <FooterPagina />
      </PlantillaPagina>
    </div>
  );
}
