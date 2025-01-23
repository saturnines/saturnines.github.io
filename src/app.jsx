import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Resume from './pages/resume';
import Projects from './pages/projects';

export default function App() {
 return (
   <HashRouter>
     <div className="min-h-screen bg-gray-50">
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/resume" element={<Resume />} />
         <Route path="/projects" element={<Projects />} />
       </Routes>
     </div>
   </HashRouter>
 );
}
