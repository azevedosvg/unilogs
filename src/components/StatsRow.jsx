import { useTheme } from "../context/ThemeContext.jsx";
import "../styles/StatsRow.css";
import {
  FaBox,
  FaCheckCircle,
  FaTruck,
  FaExclamationTriangle,
} from "react-icons/fa";

const stats = [
  {
    icon: FaBox,
    label: "Entregas Hoje",
    value: "342",
    change: "+18%",
    up: true,
  },
  {
    icon: FaCheckCircle,
    label: "Concluídas",
    value: "289",
    change: "+11%",
    up: true,
  },
  { icon: FaTruck, label: "Em Rota", value: "47", change: "+4%", up: true },
  {
    icon: FaExclamationTriangle,
    label: "Ocorrências",
    value: "6",
    change: "-3",
    up: false,
  },
];

export default function StatsRow() {
  const { isDark } = useTheme();

  return (
    <section className="stats-row">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div className="stat-card" key={stat.label}>
            <div className="stat-top">
              <Icon size={16} />
              <span className="stat-label">{stat.label}</span>
            </div>
            <div className="stat-bottom">
              <p className="stat-value">{stat.value}</p>
              <span className={`stat-change ${stat.up ? "up" : "down"}`}>
                {stat.change}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
