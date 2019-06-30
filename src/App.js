import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";

import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Countries from './components/Countries/Countries.js'
import Continents from './components/Continents/Continents.js'

class App extends Component {

render() {

return (
  <div className="App">

{/* HEADER */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>30 days of React</h1>
          <h2>Day Twenty Seven / Geography App with Nested Routes</h2>
        </header>

{/* Indicate which component you want to show for each route  */}
        <BrowserRouter>
     
          <Nav />

          <Route path="/" component={Home} exact/>
          <Route path="/country" component={Countries}/>
          <Route path="/continent" component={Continents}/>

        </BrowserRouter>

    </div>
  )
 }
}

export default App;

