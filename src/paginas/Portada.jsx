import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina";
import FooterPagina from "../componentes/FooterPagina/FooterPagina";
import "./Portada.css";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Portada() {
  const navegarPaginas = useNavigate();
  function IrAPersonas() {
    navegarPaginas("/personas");
  }
  return (
    <PlantillaPagina>
      <div className="contenedor contenedor-portada">
        <div className="portada-superior">
          <div className="logo-contenedor">
            <div className="logo-portada">
              <img src="./img/pez-logo.png" alt="Pez morado" width={"53px"} />
            </div>
            <div className="titulo-portada">
              <h1>La Marea Púrpura</h1>
            </div>
          </div>
          <div className="comida-marina">
            <p>Comida marina</p>
          </div>
        </div>
        <div className="portada-inferior">
          <div className="portada-seccion-reservar">
            <p className="reservar-mesa">Reserve su mesa: </p>
            <div className="descripcion-portada">
              <p>En pocos pasos, sin complicaciones y sin registros</p>
              <p>Sin vueltas, su mes lo espera</p>
            </div>
            <div className="boton-continuar">
              <div onClick={IrAPersonas} className="boton-portada">
                Reservar Ahora
              </div>
              <div className="flecha-continuar">
                <Icon
                  icon="material-symbols:arrow-right-alt-rounded"
                  width="40"
                  height="40"
                />
              </div>
            </div>

            <div className="info-datos-portada">
              <p>
                Sus datos están seguros. Cancele o modifique sus datos hasta 2
                horas antes
              </p>
            </div>
          </div>
          <div className="portada-seccion-mapa">
            <p>Dónde ubicarnos:</p>
            <p>Av. Aviación 3068, San Borja</p>
            <div className="portada-mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1709175145033!2d-77.00536250489289!3d-12.100448979971926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7db83a29d79%3A0x254745943871d391!2sAv.%20Aviaci%C3%B3n%203068%2C%20San%20Borja%2015036!5e0!3m2!1sen!2spe!4v1762377749331!5m2!1sen!2spe&z=0"
                className="mapa-iframe"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <FooterPagina />
    </PlantillaPagina>
  );
}
