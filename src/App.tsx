// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import './styles/global.css';
import { MetaMaskButton } from "@metamask/sdk-react-ui"

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
      <div className="wallet">
        <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
      </div>
    </Router>
  );
};

export default App;
