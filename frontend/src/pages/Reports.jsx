import { useState } from 'react';
import { mockScans } from '../data/mockData';
import Panel from '../components/Panel';
import Table from '../components/Table';
import SeverityBadge from '../components/SeverityBadge';
import Button from '../components/Button';
import './Reports.css';

export default function Reports() {
  const [selectedScan, setSelectedScan] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDownload = (scanId) => {
    alert(`Downloading report for scan ${scanId}...`);
  };

  const handlePrint = () => {
    window.print();
  };

  const completedScans = mockScans.filter(scan => scan.status === 'completed');

  return (
    <section className="reports-page visible">
      <div className="container">
        <div className="reports-header">
          <div>
            <h1 style="color:var(--color-white)">Reports</h1>
            <p className="text-light">Download and view security scan reports</p>
          </div>
          <Button onClick={handlePrint}>Print</Button>
        </div>

        <Panel title="Available Reports">
          <Table headers={['Target', 'Type', 'Score', 'Date', 'Findings', 'Actions']}>
            {completedScans.map((scan) => (
              <tr key={scan.id}>
                <td>
                  <div className="report-target">{scan.target}</div>
                </td>
                <td>{scan.type}</td>
                <td>
                  <span className="report-score">{scan.score}</span>
                </td>
                <td className="text-light">{formatDate(scan.date)}</td>
                <td>
                  <div className="report-findings">
                    {scan.findings.critical > 0 && (
                      <span className="finding-count critical">{scan.findings.critical} Critical</span>
                    )}
                    {scan.findings.high > 0 && (
                      <span className="finding-count high">{scan.findings.high} High</span>
                    )}
                    {scan.findings.medium > 0 && (
                      <span className="finding-count medium">{scan.findings.medium} Medium</span>
                    )}
                    {scan.findings.low > 0 && (
                      <span className="finding-count low">{scan.findings.low} Low</span>
                    )}
                  </div>
                </td>
                <td>
                  <div className="report-actions">
                    <Button variant="default" onClick={() => handleDownload(scan.id)}>
                      Download PDF
                    </Button>
                    <Button variant="default" onClick={() => setSelectedScan(selectedScan === scan.id ? null : scan.id)}>
                      {selectedScan === scan.id ? 'Hide' : 'View'}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </Table>
        </Panel>

        {selectedScan && (
          <Panel title="Report Summary" className="report-summary">
            {(() => {
              const scan = completedScans.find(s => s.id === selectedScan);
              if (!scan) return null;
              
              return (
                <div className="report-details">
                  <div className="report-section">
                    <h3>Scan Information</h3>
                    <div className="report-info-grid">
                      <div>
                        <strong>Target:</strong> {scan.target}
                      </div>
                      <div>
                        <strong>Type:</strong> {scan.type}
                      </div>
                      <div>
                        <strong>Date:</strong> {formatDate(scan.date)}
                      </div>
                      <div>
                        <strong>Security Score:</strong> {scan.score}/100
                      </div>
                    </div>
                  </div>

                  <div className="report-section">
                    <h3>Findings Summary</h3>
                    <div className="findings-summary-grid">
                      <div className="finding-summary-item">
                        <span className="finding-summary-label">Critical:</span>
                        <span className="finding-summary-value critical">{scan.findings.critical}</span>
                      </div>
                      <div className="finding-summary-item">
                        <span className="finding-summary-label">High:</span>
                        <span className="finding-summary-value high">{scan.findings.high}</span>
                      </div>
                      <div className="finding-summary-item">
                        <span className="finding-summary-label">Medium:</span>
                        <span className="finding-summary-value medium">{scan.findings.medium}</span>
                      </div>
                      <div className="finding-summary-item">
                        <span className="finding-summary-label">Low:</span>
                        <span className="finding-summary-value low">{scan.findings.low}</span>
                      </div>
                    </div>
                  </div>

                  <div className="report-section">
                    <h3>Recommendations</h3>
                    <p>
                      This report contains {scan.findings.critical + scan.findings.high} high-priority findings 
                      that require immediate attention. Review each finding in detail and implement the 
                      recommended fixes to improve your security posture.
                    </p>
                    <p>
                      For detailed information about each finding, including step-by-step remediation 
                      instructions, please view the full results page.
                    </p>
                  </div>
                </div>
              );
            })()}
          </Panel>
        )}
      </div>
    </section>
  );
}
