import React, {Component} from 'react';
import './AddPerson.css';

class AddPerson extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      quote: "",
      superlative: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      id: Date.now(),
      ...this.state
    }
    this.props.addStudent(newStudent);
    this.setState({
      name: "",
      quote: "",
      superlative: ""
    })
  }
  
  render() {
    return (
      <form className="AddPerson">
      <h3 className="formTitle">Add a New Student</h3>
        <input type="text" name="name" className="nameInput" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
        <br/>
        <input type="text" name="quote" className="quoteInput" placeholder="Quote" value={this.state.quote} onChange={this.handleChange}/>
        <br/>
        <input type="text" name="superlative" className="superlativeInput" placeholder="Superlative" value={this.state.superlative} onChange={this.handleChange}/>
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default AddPerson;