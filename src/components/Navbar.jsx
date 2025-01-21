// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const getLinkClass = (path) => {
    return `tracking-wider transition-colors ${
      location.pathname === path 
        ? 'text-gray-800' 
        : 'text-gray-500 hover:text-gray-800'
    }`;
  };

  return (
    <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
      <Link to="/" className="text-gray-800 font-medium tracking-wider">
        KEVIN LEUNG
      </Link>
      <div className="space-x-8">
        <Link to="/resume" className={getLinkClass('/resume')}>
          RESUME
        </Link>
        <Link to="/projects" className={getLinkClass('/projects')}>
          PROJECTS
        </Link>
      </div>
    </nav>
  );
}