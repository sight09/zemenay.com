import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ChatBot from './components/ui/ChatBot';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<div className="pt-20 p-8 text-center"><h1 className="text-2xl">About Page - Coming Soon</h1></div>} />
              <Route path="/services" element={<div className="pt-20 p-8 text-center"><h1 className="text-2xl">Services Page - Coming Soon</h1></div>} />
              <Route path="/portfolio" element={<div className="pt-20 p-8 text-center"><h1 className="text-2xl">Portfolio Page - Coming Soon</h1></div>} />
              <Route path="/pricing" element={<div className="pt-20 p-8 text-center"><h1 className="text-2xl">Pricing Page - Coming Soon</h1></div>} />
              <Route path="/blog" element={<div className="pt-20 p-8 text-center"><h1 className="text-2xl">Blog Page - Coming Soon</h1></div>} />
            </Routes>
          </main>
          <Footer />
          <ChatBot />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;