import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <h1>{props.name.toUpperCase()}</h1>
      <img src={props.photo} className="photo" alt={props.name}></img>
      <h2 className="quote">"{props.quote}"</h2>
      <h3 className="superlative">{props.superlative}</h3>
    </div>
  )
}

export default Person;
