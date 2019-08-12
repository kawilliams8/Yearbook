import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
// import { parenthesizedExpression } from '@babel/types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <main>
        <Cohort people={this.state.staff}/>
      </main>
      </div>
    );
  }
}

export default App;
