import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData } from "./components/Products/data";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
    </Router>
  )
}

export default App;
