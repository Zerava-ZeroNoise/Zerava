import './Button.css';

export default function Button({ 
  children, 
  variant = 'default', 
  onClick, 
  disabled = false,
  type = 'button',
  className = ''
}) {
  const classes = `btn ${variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : ''} ${className}`.trim();
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
