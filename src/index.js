import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './index.css';
import About from './About';
import Contact from './Contact';
import App from './App';
import Dropdown from './Dropdown';
// import registerServiceWorker from './registerServiceWorker';
const Home = () => {
        <div>
                <App />
                <Dropdown/>
        </div>
}

ReactDOM.render(
        <Router>
        <div>
          <div className="head">
                <Link id="about" to={"/about"}>About</Link>
                <Link id="home" to="/">Home</Link>
                <Link id="contact" to="/contact/Chris">Contact</Link>
          </div>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/contact/:name?" component={Contact} />
        </div>          
        </Router>   , document.getElementById('root'));
