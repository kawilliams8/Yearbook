import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
// import { parenthesizedExpression } from '@babel/types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <main>
        <h2>Turing Staff</h2>
        <Cohort position="staff" people={this.state.staff}/>
        <h2>Turing Students</h2>
        <Cohort position="students" people={this.state.students} />
      </main>
      </div>
    );
  }
}

export default App;
