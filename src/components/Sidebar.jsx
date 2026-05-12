import { useTheme } from "../context/ThemeContext.jsx";
import "../styles/Sidebar.css";
import {
  FaTruck,
  FaChartBar,
  FaMapMarkerAlt,
  FaUsers,
  FaRoute,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

// Itens do menu:
const navItems = [
  { icon: FaChartBar, label: "Dashboard", active: true },
  { icon: FaTruck, label: "Entregas" },
  { icon: FaMapMarkerAlt, label: "Rastreamento" },
  { icon: FaUsers, label: "Clientes" },
  { icon: FaRoute, label: "Rotas" },
  { icon: FaChartLine, label: "Relatórios" },
  { icon: FaCog, label: "Configurações" },
];

export default function Sidebar() {
  const { isDark } = useTheme();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <FaTruck size={24} />
        <div>
          <span className="logo-text">UniLogs</span>
          <span className="logo-slogan">Logística Inteligente</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              href="#"
              key={item.label}
              className={`nav-item ${item.active ? "active" : ""}`}
              onClick={(e) => e.preventDefault()}
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-avatar">GA</div>
        <div className="user-info">
          <span className="user-name">Gabriel Azevedo</span>
          <span className="user-role">Administrador</span>
        </div>
      </div>
    </aside>
  );
}
