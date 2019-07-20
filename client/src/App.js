import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/header";
import List from './components/list';
import Edit from './components/edit';
import Add from './components/add';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Header />
        <Route path="/" exact component={List} />
        <Route path="/list" exact component={List} />
        <Route path="/edit/:_id" exact component={Edit} />
        <Route path="/add" exact component={Add} />
      </div>
    </Router>
  );
};

export default App;
