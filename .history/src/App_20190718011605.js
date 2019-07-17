import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import List from './components/list';
import Edit from './components/edit';
import Add from './components/add';
const Route = require("react-router-dom").Route;

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-light bg-light">
      <a href='/'>  <span className="navbar-brand mb-0 h3 text-center"><h1><FontAwesomeIcon icon={faBook} /> Book Store </h1></span></a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search Your Book" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <Route path='/' exact component={List}/>
      <Route path='/edit:' exact component={Edit}/>
      <Route path='/add' exact component={Add}/>
    </div>
    </Router>
  );
}

export default App;
