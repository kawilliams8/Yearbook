import React from 'react';
import './AddPerson.css';

const AddPerson = (props) => {
  
  return (
    <div className="AddPerson">
      <h3 className="formTitle">Add a New Student</h3>
      <form onSubmit={props.onSubmit}>
        <input type="text" name="name" className="nameInput" placeholder="Name" onChange={props.onChange}/>
        <br/>
        <input type="text" name="quote" className="quoteInput" placeholder="Quote" onChange={props.onChange}/>
        <br/>
        <input type="text" name="superlative" className="superlativeInput" placeholder="Superlative" onChange={props.onChange}/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddPerson;