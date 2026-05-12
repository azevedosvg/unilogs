import { useTheme } from "../context/ThemeContext.jsx";
import {
  FaCheckCircle,
  FaTruck,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaBox,
  FaUserPlus,
  FaWrench,
} from "react-icons/fa";
import "../styles/ActivityFeed.css";

const activities = [
  {
    icon: FaCheckCircle,
    text: "Entrega #UL-8821 concluída com sucesso",
    time: "Agora mesmo",
    color: "success",
  },
  {
    icon: FaTruck,
    text: "Motorista Ana Lima saiu para entrega em BH",
    time: "8 min atrás",
    color: "info",
  },
  {
    icon: FaExclamationTriangle,
    text: "Ocorrência em #UL-8817 — endereço não localizado",
    time: "15 min atrás",
    color: "danger",
  },
  {
    icon: FaMapMarkerAlt,
    text: "Rota BSB-03 recalculada por tráfego intenso",
    time: "32 min atrás",
    color: "warning",
  },
  {
    icon: FaBox,
    text: "Lote de 28 volumes coletado em São Paulo",
    time: "1h atrás",
    color: "info",
  },
  {
    icon: FaUserPlus,
    text: "Novo motorista João Pereira cadastrado",
    time: "2h atrás",
    color: "success",
  },
  {
    icon: FaWrench,
    text: "Veículo PLK-4421 liberado após manutenção",
    time: "3h atrás",
    color: "muted",
  },
];

export default function ActivityFeed() {
  const { isDark } = useTheme();

  return (
    <div className="activity-card">
      <div className="card-header">
        <h2>Atividade Recente</h2>
        <span className="live-badge">● Ao vivo</span>
      </div>
      <ul className="activity-list">
        {activities.map((act, i) => {
          const Icon = act.icon;
          return (
            <li key={i} className="activity-item">
              <span className={`activity-icon icon-${act.color}`}>
                <Icon size={14} />
              </span>
              <div className="activity-body">
                <p className="activity-text">{act.text}</p>
                <span className="activity-time">{act.time}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
