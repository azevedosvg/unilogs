import { useTheme } from "../context/ThemeContext.jsx";
import { FaSearch, FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import "../styles/Topbar.css";

function useDateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = dateTime.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = dateTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formatted} · ${time}`;
}

export default function Topbar() {
  const { isDark, toggleTheme } = useTheme();
  const dateTime = useDateTime();

  return (
    <header className="topbar">
      <div className="topbar-title">
        <h1>Painel de Controle</h1>
        <span className="topbar-subtitle">{dateTime}</span>
        <span className="topbar-authors">
          Gabriel de Azevedo Silva e Paulo Victor Rodrigues Moraes
        </span>
      </div>

      <div className="topbar-actions">
        <div className="search-box">
          <FaSearch size={14} />
          <input type="text" placeholder="Buscar entregas, rotas..." />
        </div>

        <button className="notif-btn" aria-label="Notificações">
          <FaBell size={16} />
          <span className="notif-badge">5</span>
        </button>

        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
          <span>{isDark ? "Claro" : "Escuro"}</span>
        </button>
      </div>
    </header>
  );
}
