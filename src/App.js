import React from 'react';
import './App.css';
import Home from './containers/Home'
import Header from './components/Header/index.js'
import Hero from './components/Hero/index.js'
import Contact from './containers/Contact/index.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Post from './containers/Post/index.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home}/>
        <Route path="/contact" component={Contact} />
        <Route path="/post" component={Post} />
      </div>
    </Router>
  );
}

export default App;
