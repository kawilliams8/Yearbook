import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import AddPerson from '../AddPerson/AddPerson';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      staff: people.staff,
      students: people.students
    }
    this.removeStudent = this.removeStudent.bind(this);
  }

  addStudent = (student) => {
    this.setState({
      students: [...this.state.students, student]
    })
  }

  removeStudent(id){
    const filteredStudents = this.state.students.filter(student => student.id !== id)
    this.setState({
      students: filteredStudents
    })
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
        <AddPerson addStudent={this.addStudent}/>
        <Cohort position="students" people={this.state.students} removeStudent={this.removeStudent}/>
      </main>
      </div>
    );
  }
}

export default App;