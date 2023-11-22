import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import QuotePage from './QuotePage';
import ContactUsPage from './components/ContactUsPage';
import "./App.css"

// Import other pages as needed

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        // Add more routes as needed
      </Routes>
    </div>
  );
}

export default App;
