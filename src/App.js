import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './HomePage';
import QuotePage from './QuotePage';
import ContactUsPage from './ContactUsPage';
import "./App.css"

// Import other pages as needed

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        // Add more routes as needed
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
