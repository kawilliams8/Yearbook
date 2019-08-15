import React from 'react';
import './Person.css';

const Person = ({name, photo, quote, superlative, id, removeStudent}) => {
  return (
    <div className="Person">
      <h3 className="name">{name.toUpperCase()}</h3>
      <img src={photo} className="photo" alt={name}></img>
      <h4 className="quote">"{quote}"</h4>
      <h5 className="superlative">{superlative}</h5>
      <button className="deleteButton" onClick={() => removeStudent(id)}>Delete</button>
    </div>
  )
}

export default Person;
