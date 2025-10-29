import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/experiences', label: 'Experiences', icon: '💼' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/about', label: 'About Me', icon: '👤' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-text">CY</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-section-label">Navigation</div>
          <ul className="nav-items">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section">
          <div className="nav-section-label">Connect</div>
          <ul className="nav-items">
            <li>
              <a 
                href="https://github.com/Cyang8980" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-item"
              >
                <span className="nav-icon">📁</span>
                <span className="nav-label">GitHub</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/cyang8980/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-item"
              >
                <span className="nav-icon">💼</span>
                <span className="nav-label">LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">CY</div>
          <div className="user-info">
            <div className="user-name">Calvin Yang</div>
            <div className="user-email">cyang8980@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

