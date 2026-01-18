import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Layout.css';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="layout">
      <nav className="nav">
        <Link to="/" className="nav-brand">
          <img src="/icon.jpg" alt="Zerava" className="nav-logo" />
          <span className="nav-brand-text">Zerava</span>
        </Link>
        <button
          className="nav-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>
            Dashboard
          </Link>
          <Link to="/dashboard/scan" className={`nav-link ${isActive('/dashboard/scan')}`}>
            New Scan
          </Link>
          <Link to="/dashboard/reports" className={`nav-link ${isActive('/dashboard/reports')}`}>
            Reports
          </Link>
        </div>
        <div className="nav-actions">
          {user && (
            <span className="nav-user" style={{ color: 'var(--color-light)', marginRight: '0.75rem' }}>
              {user.name || user.email}
            </span>
          )}
          <button 
            className="btn"
            onClick={() => {
              const html = document.documentElement;
              const currentTheme = html.getAttribute('data-theme');
              html.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
            }}
            aria-label="Toggle theme"
          >
            Theme
          </button>
          <button 
            className="btn"
            onClick={handleLogout}
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="layout-main">
        <aside className="sidebar">
          <ul className="sidebar-menu">
            <li>
              <Link to="/dashboard" className={`sidebar-menu-link ${isActive('/dashboard')}`}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/scan" className={`sidebar-menu-link ${isActive('/dashboard/scan')}`}>
                New Scan
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reports" className={`sidebar-menu-link ${isActive('/dashboard/reports')}`}>
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
