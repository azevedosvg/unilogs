import { useTheme } from "../context/ThemeContext.jsx";
import { FaSearch, FaBell, FaMoon, FaSun } from "react-icons/fa";

export default function Topbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="topbar">
      <div className="topbar-title">
        <h1>Painel de Controle</h1>
        <span className="topbar-subtitle">Bem-vindo de volta, Gabriel!</span>
      </div>

      <div className="topbar-actions">
        <div className="search-box">
          <FaSearch size={14} />
          <input type="text" placeholder="Buscar por entregas, rotas..." />
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
