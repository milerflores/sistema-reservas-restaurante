import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina";
import "./Portada.css";
import { useNavigate } from "react-router-dom";

export default function Portada() {
  const navegarPaginas = useNavigate();
  function IrAPersonas() {
    navegarPaginas("/personas");
  }
  return (
    <PlantillaPagina>
      <div className="contenedor contenedor-portada">
        <div className="logo-portada">
          <img src="./img/pez-logo.png" alt="Pez morado" width={"70px"} />
        </div>
        <div className="titulo-portada">
          <p>Reserve su mesa en </p>
          <h1>La Marea Púrpura</h1>
          <p>Comida marina</p>
        </div>
        <div className="descripcion-portada">
          <p>En pocos pasos, sin complicaciones y sin registros</p>
          <p>Sin vueltas, su mes lo espera</p>
        </div>
        <button onClick={IrAPersonas} className="boton-portada">
          Reservar Ahora
        </button>
        <div className="info-datos-portada">
          <p>
            Sus datos están seguros. Cancele o modifique sus datos hasta 2 horas
            antes
          </p>
        </div>
      </div>
    </PlantillaPagina>
  );
}
