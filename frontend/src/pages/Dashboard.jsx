import { Link } from 'react-router-dom';
import { mockScans, mockDashboardStats } from '../data/mockData';
import Panel from '../components/Panel';
import MetricBlock from '../components/MetricBlock';
import Table from '../components/Table';
import SeverityBadge from '../components/SeverityBadge';
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
    if (score >= 80) return 'var(--color-success)';
    if (score >= 60) return 'var(--color-medium)';
    return 'var(--color-critical)';
  };

  return (
    <div className="dashboard">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-description">Security overview and recent scan activity</p>
      </div>

      <div className="dashboard-metrics grid grid-4">
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

      <div className="dashboard-content">
        <Panel title="Recent Scans">
          <Table headers={['Target', 'Type', 'Status', 'Score', 'Date', 'Actions']}>
            {mockScans.map((scan) => (
              <tr key={scan.id}>
                <td>
                  <div className="scan-target">
                    {scan.target}
                  </div>
                </td>
                <td>{scan.type}</td>
                <td>
                  <span className={`status-badge status-${scan.status}`}>
                    {scan.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </td>
                <td>
                  {scan.score !== null ? (
                    <span 
                      className="score-value"
                      style={{ color: getScoreColor(scan.score) }}
                    >
                      {scan.score}
                    </span>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>
                <td className="text-muted">{formatDate(scan.date)}</td>
                <td>
                  {scan.status === 'completed' ? (
                    <Link 
                      to={`/results/${scan.id}`}
                      className="btn btn-secondary"
                      style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--spacing-xs) var(--spacing-sm)' }}
                    >
                      View Results
                    </Link>
                  ) : (
                    <span className="text-muted">Scanning...</span>
                  )}
                </td>
              </tr>
            ))}
          </Table>
        </Panel>

        <div className="dashboard-actions">
          <Link to="/scan" className="btn btn-primary">
            Start New Scan
          </Link>
        </div>
      </div>
    </div>
  );
}
