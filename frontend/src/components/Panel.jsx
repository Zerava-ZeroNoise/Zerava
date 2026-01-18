import './Panel.css';

export default function Panel({ title, children, className = '' }) {
  return (
    <div className={`panel ${className}`}>
      {title && <h3 className="panel-title">{title}</h3>}
      <div className="panel-content">{children}</div>
    </div>
  );
}
