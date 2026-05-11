import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />
      </div>
    </div>
  );
}
