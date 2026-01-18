import { Link } from 'react-router-dom';
import { mockScans, mockDashboardStats } from '../data/mockData';
import Panel from '../components/Panel';
import MetricBlock from '../components/MetricBlock';
import Table from '../components/Table';
import SeverityBadge from '../components/SeverityBadge';
import Button from '../components/Button';
import './Dashboard.css';

export default function Dashboard() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'var(--color-primary)';
    if (score >= 60) return '#ffb84d';
    return '#ff6b6b';
  };

  return (
    <section className="dashboard visible">
      <div className="container">
        <h1>Dashboard</h1>
        <p className="text-light">Security overview and recent scan activity</p>

        <div className="dashboard-metrics">
          <Panel>
            <MetricBlock 
              label="Total Scans"
              value={mockDashboardStats.totalScans}
            />
          </Panel>
          <Panel>
            <MetricBlock 
              label="Average Score"
              value={mockDashboardStats.averageScore}
              change="Last 30 days"
            />
          </Panel>
          <Panel>
            <MetricBlock 
              label="Total Findings"
              value={mockDashboardStats.totalFindings}
            />
          </Panel>
          <Panel>
            <MetricBlock 
              label="Critical Risks"
              value={mockDashboardStats.criticalFindings}
            />
          </Panel>
        </div>

        <Panel title="Recent Scans">
          <Table headers={['Target', 'Type', 'Status', 'Score', 'Date', 'Actions']}>
            {mockScans.map((scan) => (
              <tr key={scan.id}>
                <td>
                  <div className="scan-target">{scan.target}</div>
                </td>
                <td>{scan.type}</td>
                <td>
                  <SeverityBadge severity={scan.status === 'completed' ? 'info' : 'low'}>
                    {scan.status === 'completed' ? 'Completed' : 'Running'}
                  </SeverityBadge>
                </td>
                <td>
                  {scan.score > 0 ? (
                    <span className="score-value" style={{ color: getScoreColor(scan.score) }}>
                      {scan.score}
                    </span>
                  ) : (
                    <span className="text-light">—</span>
                  )}
                </td>
                <td className="text-light">{formatDate(scan.date)}</td>
                <td>
                  {scan.status === 'completed' ? (
                    <Link to={`/dashboard/results/${scan.id}`} className="btn">
                      View Results
                    </Link>
                  ) : (
                    <span className="text-light">Scanning...</span>
                  )}
                </td>
              </tr>
            ))}
          </Table>
        </Panel>

        <div className="dashboard-actions">
          <Link to="/dashboard/scan" className="btn btn-primary">
            Start New Scan
          </Link>
        </div>
      </div>
    </section>
  );
}
