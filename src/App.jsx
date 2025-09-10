import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Appointment from './Appointment';
import History from './History';
import Medicine from './Medicine';
import Billing from './Billing';
import './styles/App.css';

function App() {
  return (
    /* Appointment Scheduling, medical history, medicine tracking, billing */
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/history" element={<History />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </div>
  );
}

export default App;
