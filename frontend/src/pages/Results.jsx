import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockResults } from '../data/mockData';
import Panel from '../components/Panel';
import SeverityBadge from '../components/SeverityBadge';
import Button from '../components/Button';
import './Results.css';

export default function Results() {
  const { scanId } = useParams();
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [expandedFindings, setExpandedFindings] = useState(new Set());

  // In a real app, fetch results based on scanId
  const results = mockResults;

  const filteredFindings = useMemo(() => {
    if (selectedSeverity === 'all') {
      return results.findings;
    }
    return results.findings.filter(f => f.severity.toLowerCase() === selectedSeverity);
  }, [selectedSeverity, results.findings]);

  const toggleFinding = (findingId) => {
    const newExpanded = new Set(expandedFindings);
    if (newExpanded.has(findingId)) {
      newExpanded.delete(findingId);
    } else {
      newExpanded.add(findingId);
    }
    setExpandedFindings(newExpanded);
  };

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

  const getScoreColor = (score) => {
    if (score >= 80) return 'var(--color-success)';
    if (score >= 60) return 'var(--color-medium)';
    return 'var(--color-critical)';
  };

  return (
    <div className="results-page">
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="page-title">Scan Results</h1>
            <p className="page-description">{results.target}</p>
          </div>
          <Link to="/" className="btn btn-secondary">
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="results-summary">
        <Panel>
          <div className="results-summary-content">
            <div className="results-score">
              <div className="metric">
                <span className="metric-label">Security Score</span>
                <span 
                  className="metric-value"
                  style={{ color: getScoreColor(results.score) }}
                >
                  {results.score}
                </span>
              </div>
            </div>
            <div className="results-stats grid grid-4">
              <div className="metric">
                <span className="metric-label">Total Findings</span>
                <span className="metric-value">{results.summary.totalFindings}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Critical</span>
                <span className="metric-value" style={{ color: 'var(--color-critical)' }}>
                  {results.summary.critical}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">High</span>
                <span className="metric-value" style={{ color: 'var(--color-high)' }}>
                  {results.summary.high}
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Medium</span>
                <span className="metric-value" style={{ color: 'var(--color-medium)' }}>
                  {results.summary.medium}
                </span>
              </div>
            </div>
            <div className="results-meta">
              <p className="text-muted">
                Scan Type: {results.type} | Completed: {formatDate(results.date)}
              </p>
            </div>
          </div>
        </Panel>
      </div>

      <div className="results-findings">
        <Panel>
          <div className="panel-header">
            <h3 className="panel-title">Detailed Findings</h3>
            <div className="severity-filters">
              <button
                className={`filter-btn ${selectedSeverity === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedSeverity('all')}
              >
                All ({results.findings.length})
              </button>
              <button
                className={`filter-btn ${selectedSeverity === 'critical' ? 'active' : ''}`}
                onClick={() => setSelectedSeverity('critical')}
              >
                Critical ({results.summary.critical})
              </button>
              <button
                className={`filter-btn ${selectedSeverity === 'high' ? 'active' : ''}`}
                onClick={() => setSelectedSeverity('high')}
              >
                High ({results.summary.high})
              </button>
              <button
                className={`filter-btn ${selectedSeverity === 'medium' ? 'active' : ''}`}
                onClick={() => setSelectedSeverity('medium')}
              >
                Medium ({results.summary.medium})
              </button>
              <button
                className={`filter-btn ${selectedSeverity === 'low' ? 'active' : ''}`}
                onClick={() => setSelectedSeverity('low')}
              >
                Low ({results.summary.low})
              </button>
            </div>
          </div>

          <div className="findings-list">
            {filteredFindings.length === 0 ? (
              <p className="text-muted">No findings found for the selected severity level.</p>
            ) : (
              filteredFindings.map((finding) => (
                <div key={finding.id} className="finding-item">
                  <div 
                    className="finding-header"
                    onClick={() => toggleFinding(finding.id)}
                  >
                    <div className="finding-title-section">
                      <h4 className="finding-title">{finding.title}</h4>
                      <div className="finding-meta">
                        <SeverityBadge severity={finding.severity} />
                        <span className="finding-category">{finding.category}</span>
                      </div>
                    </div>
                    <button className="finding-toggle">
                      {expandedFindings.has(finding.id) ? '−' : '+'}
                    </button>
                  </div>
                  {expandedFindings.has(finding.id) && (
                    <div className="finding-details">
                      <div className="finding-section">
                        <h5 className="finding-section-title">Description</h5>
                        <p>{finding.description}</p>
                      </div>
                      <div className="finding-section">
                        <h5 className="finding-section-title">Impact</h5>
                        <p>{finding.impact}</p>
                      </div>
                      <div className="finding-section">
                        <h5 className="finding-section-title">Recommendation</h5>
                        <p>{finding.recommendation}</p>
                      </div>
                      <div className="finding-section">
                        <h5 className="finding-section-title">Fix Steps</h5>
                        <ol className="fix-steps">
                          {finding.fixSteps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </Panel>
      </div>
    </div>
  );
}
