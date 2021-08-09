import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </Router>
  )
}

export default App;
