import './MetricBlock.css';

export default function MetricBlock({ label, value, change, className = '' }) {
  return (
    <div className={`metric ${className}`}>
      <span className="metric-label">{label}</span>
      <span className="metric-value">{value}</span>
      {change && (
        <span className="metric-change">{change}</span>
      )}
    </div>
  );
}
