import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Home from "./pages/Home";
import Geospat from "./pages/Geospat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/404";

class App extends Component {
  render () {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/geospat" component={Geospat} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404"/>
      </Switch>
    </Router>
  );
  }
  }

export default App;
