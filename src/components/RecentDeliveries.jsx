import "../styles/RecentDeliveries.css";
import { FaBox } from "react-icons/fa";

const deliveries = [
  {
    id: "#UL-8821",
    recipient: "Mercado Bom Preço",
    destination: "Av. Paulista, 1200 — SP",
    driver: "Carlos Mendes",
    status: "Entregue",
  },
  {
    id: "#UL-8820",
    recipient: "Farmácia Saúde+",
    destination: "Rua das Flores, 45 — BH",
    driver: "Ana Lima",
    status: "Em rota",
  },
  {
    id: "#UL-8819",
    recipient: "Tech Distribuidora",
    destination: "Rod. BR-101, km 88 — RJ",
    driver: "Diego Souza",
    status: "Coletado",
  },
  {
    id: "#UL-8818",
    recipient: "Supermercado União",
    destination: "Av. Brasil, 3300 — CWB",
    driver: "Fernanda Reis",
    status: "Entregue",
  },
  {
    id: "#UL-8817",
    recipient: "Construtora Nova Era",
    destination: "Setor Industrial — BSB",
    driver: "Marcos Teixeira",
    status: "Ocorrência",
  },
];

const statusClass = {
  Entregue: "status-success",
  "Em rota": "status-info",
  Coletado: "status-warning",
  Ocorrência: "status-danger",
};

export default function RecentDeliveries() {
  return (
    <div className="deliveries-card">
      <div className="card-header">
        <h2>Entregas Recentes</h2>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Ver todas →
        </a>
      </div>
      <table className="deliveries-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Destinatário</th>
            <th>Destino</th>
            <th>Motorista</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((d) => (
            <tr key={d.id}>
              <td className="delivery-id">{d.id}</td>
              <td>{d.recipient}</td>
              <td className="delivery-destination">{d.destination}</td>
              <td>{d.driver}</td>
              <td>
                <span className={`status-badge ${statusClass[d.status]}`}>
                  {d.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
