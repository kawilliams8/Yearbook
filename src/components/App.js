import React, { Component } from 'react';
import Cohort from './Cohort';
import AddPerson from './AddPerson';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    let old = [...this.state.students]
    old.push({[name]: value})
    console.log(old)

    this.setState({
      [this.state.students] : old
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit', event.target)
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
        <AddPerson onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        <Cohort position="students" people={this.state.students} />
      </main>
      </div>
    );
  }
}

export default App;
