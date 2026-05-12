import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsRow from "./components/StatsRow";
import RecentDeliveries from "./components/RecentDeliveries";
import ActivityFeed from "./components/ActivityFeed";
export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Topbar />
        <main className="content">
          <StatsRow />
          <div className="bottom-grid">
            <RecentDeliveries />
            <ActivityFeed />
          </div>
        </main>
      </div>
    </div>
  );
}
