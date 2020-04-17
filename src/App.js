import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import logo from './logo.svg'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Route exact path="/" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <div className="navigation">
        <img src={logo} className="logo-image App-logo" alt="Logo Image" />
        <div className="navigation-sub">
                                        
          <Link to="/" className="item">Projects</Link>
          <Link to="/about" className="item">About</Link>
          <Link to="/skills" className="item">Skills</Link>
        </div>
      </div>
    </div>
  </BrowserRouter>    );
}

export default App;
