import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Projects from './pages/Projects'
import About from './pages/About'
import Skills from './pages/Skills'
import Home from './pages/Home'
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App hero-image">
      <Nav></Nav>
      <Route path="/React-Portfolio" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>    );
}

export default App;
