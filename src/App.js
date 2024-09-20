import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Legal from './pages/legal';
import Navbar from './components/navbar';
import Footer from './components/footer';  // Import du composant Footer

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
