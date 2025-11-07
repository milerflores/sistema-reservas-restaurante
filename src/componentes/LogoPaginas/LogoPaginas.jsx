import "./LogoPaginas.css";
import { useNavigate } from "react-router-dom";

export default function LogoPaginas() {
  const navigate = useNavigate();
  const irAPortada = () => {
    navigate("/");
  };
  return (
    <div
      className="logo-paginas"
      onClick={irAPortada}
      style={{ cursor: "pointer" }}
    >
      <div className="pez-paginas">
        <img src="./img/pez-logo.png" alt="Logo pez rosado" width={"40px"} />
      </div>

      <p>La Marea Púrpura</p>
    </div>
  );
}
