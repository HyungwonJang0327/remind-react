import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './pages/Main';

const Router = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path="/" element={<Main isDarkMode={isDarkMode} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
