import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
