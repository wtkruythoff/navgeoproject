import React from "react";
import logo from './logo.svg';
import './App.css';

import Home from "./Home";
import Geospat from "./Geospat";
import About from "./About";
import Contact from "./Contact";

import { Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
    <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/geospat" component={Geospat} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
