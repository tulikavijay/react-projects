import React, { Component } from 'react';
import './App.css';
import {Navbar} from 'react-materialize';
import Banner from './Banner.js';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Navbar right>
    </Navbar>
    <Banner />
      </div>
    );
  }
}

export default App;
