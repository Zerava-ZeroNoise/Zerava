import { Outlet, Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.jpg';
import './Layout.css';

export default function Layout() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="layout">
      <nav className="nav">
        <Link to="/" className="nav-brand">
          <img src={logoImage} alt="Zerava" className="nav-logo" />
          <span className="nav-brand-text">Zerava</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            Dashboard
          </Link>
          <Link to="/scan" className={`nav-link ${isActive('/scan')}`}>
            New Scan
          </Link>
          <Link to="/reports" className={`nav-link ${isActive('/reports')}`}>
            Reports
          </Link>
        </div>
        <div className="nav-actions">
          <button 
            className="btn btn-secondary"
            onClick={() => {
              const html = document.documentElement;
              const currentTheme = html.getAttribute('data-theme');
              html.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
            }}
            aria-label="Toggle theme"
          >
            Theme
          </button>
        </div>
      </nav>
      <div className="layout-main">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <Link to="/" className={`sidebar-menu-link ${isActive('/')}`}>
                Dashboard
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link to="/scan" className={`sidebar-menu-link ${isActive('/scan')}`}>
                New Scan
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link to="/reports" className={`sidebar-menu-link ${isActive('/reports')}`}>
                Reports
              </Link>
            </li>
          </ul>
        </aside>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
