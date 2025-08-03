import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Certifications  from './pages/Certifications'; 

import profileImg from './assets/profile.jpg';
import './App.css';

function Navbar() {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
   
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Certifications', path: '/certifications' } ,
     { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
     
  ];
  return (
    <nav className="bg-neutral-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-center">
        <div className="flex items-center gap-6 bg-neutral-900 px-6 py-3 rounded-full shadow-lg border border-neutral-800">
          <img
            src={profileImg}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
          />
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md font-semibold transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'bg-white text-neutral-900 shadow'
                  : 'text-white hover:text-blue-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 min-h-screen">
      <Router>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
