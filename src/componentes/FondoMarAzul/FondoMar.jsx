import "./FondoMar.css";

export default function FondoMar({ children }) {
  return (
    <>
      <div className="fondo-mar-global">
        {/* Burbujas decorativas */}
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        {/* Animales marinos */}
        <div className="marine-life">
          {/* Pez 1 */}
          <div className="fish fish1">
            <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="40"
                cy="30"
                rx="35"
                ry="20"
                fill="#FF6B9D"
                opacity="0.8"
              />
              <circle cx="25" cy="25" r="3" fill="#000" />
              <path d="M 75 30 L 95 20 L 95 40 Z" fill="#FF8FB4" />
              <path d="M 35 15 L 40 5 L 42 15 Z" fill="#FF8FB4" />
            </svg>
          </div>

          {/* Pez 2 */}
          <div className="fish fish2">
            <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="40"
                cy="30"
                rx="32"
                ry="18"
                fill="#FFD700"
                opacity="0.8"
              />
              <circle cx="25" cy="25" r="2.5" fill="#000" />
              <path d="M 72 30 L 95 22 L 95 38 Z" fill="#FFA500" />
              <path d="M 38 12 L 42 5 L 45 12 Z" fill="#FFA500" />
            </svg>
          </div>

          {/* Pez 3 */}
          <div className="fish fish3">
            <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="40"
                cy="30"
                rx="33"
                ry="19"
                fill="#00CED1"
                opacity="0.8"
              />
              <circle cx="26" cy="26" r="3" fill="#000" />
              <path d="M 73 30 L 95 20 L 95 40 Z" fill="#20B2AA" />
              <path d="M 36 14 L 40 6 L 43 14 Z" fill="#20B2AA" />
            </svg>
          </div>

          {/* Medusa */}
          <div className="jellyfish">
            <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
              <ellipse
                cx="30"
                cy="25"
                rx="25"
                ry="20"
                fill="#B58DE6"
                opacity="0.6"
              />
              <path
                d="M 15 40 Q 12 60 15 70"
                stroke="#9370DB"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 25 40 Q 23 62 25 72"
                stroke="#9370DB"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 35 40 Q 37 62 35 72"
                stroke="#9370DB"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 45 40 Q 48 60 45 70"
                stroke="#9370DB"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Estrella de mar */}
          <div className="starfish">
            <svg viewBox="0 0 51 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 25 2 L 30 18 L 48 18 L 33 28 L 38 45 L 25 35 L 12 45 L 17 28 L 2 18 L 20 18 Z"
                fill="#FF6B6B"
                opacity="0.8"
              />
              <circle cx="25" cy="24" r="2" fill="#8B0000" opacity="0.5" />
            </svg>
          </div>

          {/* Concha */}
          <div className="shell">
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 25 5 Q 10 15 10 30 Q 10 40 25 45 Q 40 40 40 30 Q 40 15 25 5 Z"
                fill="#DDA0DD"
                opacity="0.8"
              />
              <path
                d="M 25 10 L 25 42"
                stroke="#8B008B"
                strokeWidth="1"
                opacity="0.4"
              />
              <path
                d="M 20 15 Q 20 25 25 42"
                stroke="#8B008B"
                strokeWidth="1"
                opacity="0.3"
              />
              <path
                d="M 30 15 Q 30 25 25 42"
                stroke="#8B008B"
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Algas 1 */}
          <div className="seaweed seaweed1">
            <svg viewBox="0 0 40 180" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 20 180 Q 15 140 20 100 Q 25 60 20 20 Q 18 0 20 0"
                stroke="#3CB371"
                strokeWidth="6"
                fill="none"
                opacity="0.7"
              />
              <ellipse
                cx="12"
                cy="120"
                rx="8"
                ry="12"
                fill="#2E8B57"
                opacity="0.6"
              />
              <ellipse
                cx="28"
                cy="80"
                rx="8"
                ry="12"
                fill="#2E8B57"
                opacity="0.6"
              />
              <ellipse
                cx="14"
                cy="50"
                rx="7"
                ry="10"
                fill="#2E8B57"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Algas 2 */}
          <div className="seaweed seaweed2">
            <svg viewBox="0 0 35 150" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 17 150 Q 20 110 17 70 Q 14 40 17 10 Q 18 0 17 0"
                stroke="#228B22"
                strokeWidth="5"
                fill="none"
                opacity="0.7"
              />
              <ellipse
                cx="24"
                cy="100"
                rx="7"
                ry="11"
                fill="#006400"
                opacity="0.6"
              />
              <ellipse
                cx="10"
                cy="65"
                rx="7"
                ry="10"
                fill="#006400"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>

        {/* Olas */}
        <div className="waves-container">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
          <div className="wave wave5"></div>
        </div>
      </div>
    </>
  );
}
