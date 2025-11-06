import "./LineaProgreso.css";
import { Icon } from "@iconify/react";
import React from "react";

export default function LineaProgreso({
  pasos = [],
  pasoActual = 0,
  colorActivo = "#C44363",
  colorInactivo = "#7E92E6",
}) {
  return (
    <div className="contenedor-progreso">
      <ul
        className="lista-progreso"
        style={{
          "--color-activo": colorActivo,
          "--color-inactivo": colorInactivo,
        }}
      >
        {pasos.map((paso, index) => {
          const esActivo = index <= pasoActual;
          const mostrarValor =
            index < pasoActual &&
            paso.valor !== null &&
            paso.valor !== undefined &&
            paso.valor !== "";

          let textoMostrar;
          if (mostrarValor) {
            if (
              paso.nombre === "Fecha" ||
              paso.nombre === "Hora" ||
              paso.nombre === "Experiencia"
            ) {
              textoMostrar = paso.valor;
            } else {
              textoMostrar = `${paso.nombre}: ${paso.valor}`;
            }
          } else {
            textoMostrar = paso.nombre;
          }

          return (
            <li
              key={index}
              className={`pasos-progreso ${esActivo ? "activo" : ""}`}
            >
              <div
                className="paso-nombre"
                style={{
                  color: esActivo ? colorActivo : colorInactivo,
                }}
              >
                <Icon
                  icon={paso.icono}
                  width="30"
                  height="30"
                  color={esActivo ? colorActivo : colorInactivo}
                />
                <span className="paso-texto">{textoMostrar}</span>
              </div>
              <div
                className="paso-punto"
                style={{
                  backgroundColor: esActivo ? colorActivo : colorInactivo,
                }}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
