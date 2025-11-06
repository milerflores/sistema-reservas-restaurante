import "./Fecha.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LogoPaginas from "../componentes/LogoPaginas/LogoPaginas.jsx";
import LineaProgreso from "../componentes/LineaProgreso/LineaProgreso.jsx";
import PlantillaPagina from "../componentes/PlantillaPagina/PlantillaPagina.jsx";
import CabeceraPagina from "../componentes/CabeceraPagina/CabeceraPagina.jsx";
import FooterPagina from "../componentes/FooterPagina/FooterPagina.jsx";

function Fecha() {
  const navigate = useNavigate();
  const location = useLocation();
  const personasSeleccionadas = location.state?.personas || 0;

  const mesInicial = new Date(2025, 10, 1);
  const mesMaximo = new Date(2025, 10 + 3, 1);

  const [current, setCurrent] = useState(mesInicial);

  function prevMonth() {
    setCurrent((c) => {
      const mesAnterior = new Date(c.getFullYear(), c.getMonth() - 1, 1);
      if (mesAnterior >= mesInicial) {
        return mesAnterior;
      }
      return c;
    });
  }

  function goToNextMonth() {
    setCurrent((c) => {
      const siguienteMes = new Date(c.getFullYear(), c.getMonth() + 1, 1);
      if (siguienteMes < mesMaximo) {
        return siguienteMes;
      }
      return c;
    });
  }

  const puedeRetroceder = () => {
    return current > mesInicial;
  };

  const puedeAvanzar = () => {
    const siguienteMes = new Date(
      current.getFullYear(),
      current.getMonth() + 1,
      1
    );
    return siguienteMes < mesMaximo;
  };

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  function getMonthInfo(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return {
      name: monthNames[month],
      year,
      days: Array.from({ length: daysInMonth }, (_, i) => i + 1),
      firstDay: firstDay === 0 ? 6 : firstDay - 1,
    };
  }

  const currentMonth = getMonthInfo(current);
  const nextMonth = getMonthInfo(
    new Date(current.getFullYear(), current.getMonth() + 1, 1)
  );

  const allowedDays = {
    "2025-11": new Set([
      14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    ]),
    "2025-12": new Set([11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23]),
    "2026-01": new Set([
      5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 26, 27,
      28, 29, 30, 31,
    ]),
    "2026-02": new Set([
      2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24,
      25, 26, 27, 28,
    ]),
  };

  function isAllowed(date, day) {
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
    return allowedDays[key]?.has(day) || false;
  }

  function formatSelectedDate(dateString) {
    if (!dateString) return "";

    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    const dayName = dayNames[date.getDay()];
    const monthName = monthNames[date.getMonth()];

    return `${dayName}, ${day} de ${monthName}`;
  }

  // Función que se ejecuta al hacer clic en un día disponible
  function selectDayAndNavigate(dayKey) {
    navigate("/hora", {
      state: {
        personas: personasSeleccionadas,
        fecha: dayKey,
        fechaFormateada: formatSelectedDate(dayKey),
      },
    });
  }

  return (
    <div className="fecha-page">
      <CabeceraPagina>
        <LogoPaginas />
        <LineaProgreso
          pasoActual={1}
          pasos={[
            {
              nombre: "Personas",
              icono: "mdi:account-outline",
              valor: personasSeleccionadas,
            },
            { nombre: "Fecha", icono: "mdi:calendar-month-outline", valor: "" },
            { nombre: "Hora", icono: "mdi:clock-outline", valor: "" },
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
        <div className="contenedor contenedor-fecha">
          <div className="calendar-title-bar">
            <h2 className="calendar-title">Seleccione una fecha</h2>
          </div>
          <div className="calendar-box">
            <div className="calendar-container">
              <div className="calendar-modal">
                <div className="months-container">
                  {/* Mes actual */}
                  <div className="month-calendar">
                    <div className="month-header">
                      <button
                        className={`nav prev ${
                          !puedeRetroceder() ? "disabled" : ""
                        }`}
                        onClick={prevMonth}
                        disabled={!puedeRetroceder()}
                        aria-label="Mes anterior"
                      >
                        &lt;
                      </button>
                      <div className="month-name">
                        {currentMonth.name} {currentMonth.year}
                      </div>
                      <div className="nav-spacer"></div>
                    </div>

                    <div className="weekdays-row">
                      <span>Lun</span>
                      <span>Mar</span>
                      <span>Mie</span>
                      <span>Jue</span>
                      <span>Vie</span>
                      <span>Sab</span>
                      <span>Dom</span>
                    </div>

                    <div className="days-grid">
                      {Array.from({ length: currentMonth.firstDay }, (_, i) => (
                        <div
                          key={`empty-${i}`}
                          className="day empty"
                          aria-hidden
                        />
                      ))}
                      {currentMonth.days.map((d) => {
                        const available = isAllowed(current, d);
                        const dayKey = `${current.getFullYear()}-${String(
                          current.getMonth() + 1
                        ).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
                        return (
                          <button
                            key={d}
                            className={`day ${available ? "available" : ""}`}
                            onClick={() =>
                              available && selectDayAndNavigate(dayKey)
                            }
                            aria-label={`Seleccionar ${d} ${currentMonth.name} ${currentMonth.year}`}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Siguiente mes */}
                  <div className="month-calendar">
                    <div className="month-header">
                      <div className="nav-spacer"></div>
                      <div className="month-name">
                        {nextMonth.name} {nextMonth.year}
                      </div>
                      <button
                        className={`nav next ${
                          !puedeAvanzar() ? "disabled" : ""
                        }`}
                        onClick={goToNextMonth}
                        disabled={!puedeAvanzar()}
                        aria-label="Mes siguiente"
                      >
                        &gt;
                      </button>
                    </div>

                    <div className="weekdays-row">
                      <span>Lun</span>
                      <span>Mar</span>
                      <span>Mie</span>
                      <span>Jue</span>
                      <span>Vie</span>
                      <span>Sab</span>
                      <span>Dom</span>
                    </div>

                    <div className="days-grid">
                      {Array.from({ length: nextMonth.firstDay }, (_, i) => (
                        <div
                          key={`empty2-${i}`}
                          className="day empty"
                          aria-hidden
                        />
                      ))}
                      {nextMonth.days.map((d) => {
                        const nmDate = new Date(
                          current.getFullYear(),
                          current.getMonth() + 1,
                          1
                        );
                        const available = isAllowed(nmDate, d);
                        const dayKey = `${nmDate.getFullYear()}-${String(
                          nmDate.getMonth() + 1
                        ).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
                        return (
                          <button
                            key={d}
                            className={`day ${available ? "available" : ""}`}
                            onClick={() =>
                              available && selectDayAndNavigate(dayKey)
                            }
                            aria-label={`Seleccionar ${d} ${nextMonth.name} ${nextMonth.year}`}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="calendar-footer">
                  <button
                    className="back-button"
                    type="button"
                    onClick={() => navigate("/personas")}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Regresar
                  </button>
                  <div className="availability-legend">
                    <span className="legend-text">Días Disponibles:</span>
                    <div className="legend-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterPagina />
      </PlantillaPagina>
    </div>
  );
}

export default Fecha;
