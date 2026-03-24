import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experiences } from './pages/Experiences';
import { Projects } from './pages/Projects';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <button
          className="mobile-menu-button"
          aria-label="Open navigation menu"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
