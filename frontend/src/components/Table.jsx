import './Table.css';

export default function Table({ headers, children, className = '' }) {
  return (
    <div className="table-wrapper">
      <table className={`table ${className}`}>
        {headers && (
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
