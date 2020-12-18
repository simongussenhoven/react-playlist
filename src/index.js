import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact'
import './styles/style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


ReactDOM.render(
    <div class="container">
      <Router>
        <Nav/>
        <Route path ="/playlist" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Router>
    </div>,
  document.getElementById('root')
);
