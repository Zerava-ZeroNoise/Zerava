import './SeverityBadge.css';

export default function SeverityBadge({ severity, children }) {
  const severityClass = `badge-${severity.toLowerCase()}`;
  const displayText = children || severity;
  
  return (
    <span className={`badge ${severityClass}`}>
      {displayText}
    </span>
  );
}
