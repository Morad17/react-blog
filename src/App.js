import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Header/index.js'
import Hero from './components/Hero/index.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Hero />
    </div>
  );
}

export default App;