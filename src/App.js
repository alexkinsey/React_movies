import React from 'react';

// COMPONENTS
import Header from './components/Header'
import Home from './components/Home'

// STYLES
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
