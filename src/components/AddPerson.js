import React from 'react';
import Cohort from './Cohort';
import Person from './Person';
import './AddPerson.css';

const AddPerson = () => {
  return (
    <div className="AddPerson">
      <h3 className="formTitle">Add a New Student</h3>
      <input type="text" className="nameInput" placeholder="Student name"/>
      <br/>
      <input type="text" className="quoteInput" placeholder="Student quote"/>
      <br/>
      <input type="text" className="superlativeInput" placeholder="Student superlative"/>
      <br/>
      <button>Submit</button>
    </div>
  )
}

export default AddPerson;