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
          <span className="head">
                <h4><Link to="/">Home</Link></h4>
                <h4><Link to={"/about/"+"chris"}>About</Link></h4>
                <h4><Link to="/topics">Contact</Link></h4>
          </span>
          <Route exact path="/" component={App} />
          <Route path="/about/:label?" component={About} />
          <Route path="/topics" component={Contact} />
        </div>          
        </Router>   , document.getElementById('root'));
