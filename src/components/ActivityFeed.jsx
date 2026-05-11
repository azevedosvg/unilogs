import { useTheme } from "../context/ThemeContext.jsx";

const activities = [
  {
    icon: "✅",
    text: "Entrega #UL-8821 concluída com sucesso",
    time: "Agora mesmo",
  },
  {
    icon: "🚚",
    text: "Motorista Ana Lima saiu para entrega em BH",
    time: "8 min atrás",
  },
  {
    icon: "⚠️",
    text: "Ocorrência em #UL-8817 — endereço não localizado",
    time: "15 min atrás",
  },
  {
    icon: "📍",
    text: "Rota BSB-03 recalculada por tráfego intenso",
    time: "32 min atrás",
  },
  {
    icon: "📦",
    text: "Lote de 28 volumes coletado em São Paulo",
    time: "1h atrás",
  },
  {
    icon: "👤",
    text: "Novo motorista João Pereira cadastrado",
    time: "2h atrás",
  },
  {
    icon: "🔧",
    text: "Veículo PLK-4421 liberado após manutenção",
    time: "3h atrás",
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
        {activities.map((act, i) => (
          <li key={i} className="activity-item">
            <span className="activity-icon">{act.icon}</span>
            <div className="activity-body">
              <p className="activity-text">{act.text}</p>
              <span className="activity-time">{act.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
